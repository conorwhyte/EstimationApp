import React, { Component } from 'react';
import Amplify, { API, graphqlOperation, Auth } from 'aws-amplify';
import { withAuthenticator } from 'aws-amplify-react';
import { connect } from 'react-redux';
import aws_exports from '../aws-exports'; // specify the location of aws-exports.js file on your project
import { parse } from 'query-string';
import {
  createStoryForQuiz,
  getEpicForId,
  listEpicStories,
  addEstimateForStory,
  listStoriesEstimate,
  completeStory,
  addStoryId,
  addEstimateToStory,
  bulkAddEstimatesToStories,
  clearCurrentStory,
} from '../Actions';
import { Layout } from 'antd';
import * as subscriptions from '../graphql/subscriptions';
import {
  AddStoryModal,
  AddEstimation,
  UserAvatar,
  CompleteStoryModal,
  Navbar,
  StoriesDrawer,
  StoryHeader,
} from '../Components';
import {
  getCurrentStoryId,
  getEstimatesForStories,
} from '../Store/Selectors/story.selector';
import './Estimation.scss';

Amplify.configure(aws_exports);

const mapStateToProps = state => ({
  storyId: getCurrentStoryId(state),
  estimateForStories: getEstimatesForStories(state),
});

const mapDispatchToProps = dispatch => {
  return {
    addCurrentStoryId: id => {
      dispatch(addStoryId(id));
    },
    addEstimateForStory: (user, estimate) => {
      dispatch(addEstimateToStory(user, estimate));
    },
    bulkAddEstimatesForStory: estimates => {
      dispatch(bulkAddEstimatesToStories(estimates));
    },
    completeCurrentStory: () => {
      dispatch(clearCurrentStory());
    },
  };
};

const getCurrentStory = (stories, storyId) =>
  stories.filter(item => item.id === storyId)[0];

const subscription = API.graphql(
  graphqlOperation(subscriptions.onCreateEstimate)
);

class Estimation extends Component {
  constructor(props) {
    super(props);

    this.state = {
      ...props.location.state,
      storyTitle: '',
      showCreateStoryModal: false,
      showCompleteStoryModal: false,
      currentEpic: {},
      stories: [],
    };
  }

  async componentDidMount() {
    const { search } = this.props.location;
    const { id } = parse(search);
    const result = await getEpicForId(id);
    const storiesData = await this.getEpicStories();
    const currentEpic = {
      id,
      title: result.data.getEpic.title,
    };

    subscription.subscribe({
      next: data => {
        const { storyId, addEstimateForStory } = this.props;
        const creationData = data.value.data.onCreateEstimate;
        if (creationData.story.id === storyId) {
          addEstimateForStory(creationData.user, creationData.estimate);
        }
      },
    });

    this.setState({
      currentEpic,
      stories: storiesData.data.getEpic.stories.items,
    });
  }

  getCurrentUser = () => {
    Auth.currentAuthenticatedUser().then(user => {
      this.setState({ user });
    });
  };

  getEpicStories = async () => {
    const { search } = this.props.location;
    const { id } = parse(search);

    return await listEpicStories(id);
  };

  createStory = async input => {
    const { search } = this.props.location;
    const { id } = parse(search);

    await createStoryForQuiz(id, input);
  };

  changeTitle = event => {
    this.setState({
      storyTitle: event.target.value,
    });
  };

  showCreateModal = flag => {
    this.setState({
      showCreateStoryModal: flag,
    });
  };

  showCompleteModal = flag => {
    this.setState({
      showCompleteStoryModal: flag,
    });
  };

  clearAndUpdateStory = async value => {
    const { completeCurrentStory, storyId } = this.props;
    const { stories } = this.state;
    const { version } = getCurrentStory(stories, storyId);

    completeCurrentStory();

    this.setState({
      showCompleteStoryModal: false,
    });

    await completeStory({ storyId, version }, value);
  };

  addCurrentStory = story => {
    const { addCurrentStoryId } = this.props;
    addCurrentStoryId(story);

    this.listEstimates(story);
  };

  sendEstimate = async estimate => {
    const { storyId, authData } = this.props;
    await addEstimateForStory(storyId, estimate, authData.username);
  };

  listEstimates = async storyId => {
    const { bulkAddEstimatesForStory } = this.props;
    const estimates = await listStoriesEstimate(storyId);
    const { items } = estimates.data.getStory.estimates;

    bulkAddEstimatesForStory(items);
  };

  render() {
    const {
      showCreateStoryModal,
      currentEpic,
      stories,
      showCompleteStoryModal,
    } = this.state;
    const { history, storyId, estimateForStories } = this.props;
    const { Content } = Layout;
    const currentStory = getCurrentStory(stories, storyId);
    const addStoryModalProps = {
      loading: false,
      createStory: this.createStory,
      showCreateModal: this.showCreateModal,
      visible: showCreateStoryModal,
    };

    const averageWAG =
      estimateForStories.reduce((a, b) => a + b.estimate, 0) /
      estimateForStories.length;

    const completeStoryModalProps = {
      loading: false,
      completeStory: this.clearAndUpdateStory,
      showCreateModal: this.showCompleteModal,
      visible: showCompleteStoryModal,
      storyWAG: averageWAG.toFixed(2),
    };

    const users = estimateForStories.map(item => (
      <UserAvatar key={item.id} user={item.user} estimate={item.estimate} />
    ));

    if (averageWAG > 0) {
      users.push(
        <UserAvatar
          key="Average"
          user="Average"
          estimate={averageWAG.toFixed(2)}
        />
      );
    }

    const content = (
      <Content>
        <div className="Estimation-body">
          <StoryHeader
            showCreateModal={this.showCreateModal}
            showCompleteModal={this.showCompleteModal}
          />

          <AddStoryModal {...addStoryModalProps} />

          <CompleteStoryModal {...completeStoryModalProps} />

          {currentStory && (
            <AddEstimation
              storyTitle={currentStory.title || ''}
              sendEstimate={this.sendEstimate}
            />
          )}

          <div style={{ padding: '20px 0' }} />

          {users}

          <br />
        </div>
      </Content>
    );

    return (
      <>
        <Navbar title={currentEpic.title} history={history} />
        <Layout style={{ background: '#fff' }}>
          {content}
          <StoriesDrawer viewStory={this.addCurrentStory} stories={stories} />
        </Layout>
      </>
    );
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withAuthenticator(Estimation, { includeGreetings: false }));
