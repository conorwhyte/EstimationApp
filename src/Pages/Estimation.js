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
  listStoriesEstimate,
  completeStory,
  addEstimateToStory,
  bulkAddEstimatesToStories,
  clearCurrentStory,
} from '../Actions';
import { Layout } from 'antd';
import * as subscriptions from '../graphql/subscriptions';
import {
  AddStoryModal,
  AddEstimation,
  UserEstimates,
  CompleteStoryModal,
  Navbar,
  StoriesDrawer,
  StoryHeader,
} from '../Components';
import { getCurrentStoryId, getAverageEstimate } from '../Store/Selectors/story.selector';
import './Estimation.scss';

Amplify.configure(aws_exports);

const mapStateToProps = state => ({
  storyId: getCurrentStoryId(state),
  averageWAG: getAverageEstimate(state),
});

const mapDispatchToProps = dispatch => {
  return {
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
    const { history, storyId, authData, averageWAG } = this.props;
    const { Content } = Layout;
    const currentStory = getCurrentStory(stories, storyId);
    const addStoryModalProps = {
      loading: false,
      createStory: this.createStory,
      showCreateModal: this.showCreateModal,
      visible: showCreateStoryModal,
    };

    const completeStoryModalProps = {
      loading: false,
      completeStory: this.clearAndUpdateStory,
      showCreateModal: this.showCompleteModal,
      visible: showCompleteStoryModal,
      storyWAG: averageWAG.toFixed(2),
    };

    const content = (
      <Content>
        <div className="Estimation-body">
          <StoryHeader
            showCreateModal={this.showCreateModal}
            showCompleteModal={this.showCompleteModal} />

          <AddStoryModal {...addStoryModalProps} />

          <CompleteStoryModal {...completeStoryModalProps} />

          {currentStory && 
            <AddEstimation
              storyTitle={currentStory.title || ''}
              username={authData.username} />
          }

          <UserEstimates />
        </div>
      </Content>
    );

    return (
      <>
        <Navbar title={currentEpic.title} history={history} />
        <Layout style={{ background: '#fff' }}>
          {content}
          <StoriesDrawer listEstimates={this.listEstimates} stories={stories} />
        </Layout>
      </>
    );
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withAuthenticator(Estimation, { includeGreetings: false }));
