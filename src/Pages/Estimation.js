import React, { Component } from 'react';
import Amplify, { API, graphqlOperation, Auth } from 'aws-amplify';
import { withAuthenticator } from 'aws-amplify-react';
import { connect } from 'react-redux';
import aws_exports from '../aws-exports'; // specify the location of aws-exports.js file on your project
import { parse } from 'query-string';
import {
  getEpicForId,
  listEpicStories,
  listStoriesEstimate,
  addEstimateToStory,
  bulkAddEstimatesToStories,
} from '../Actions';
import { Layout } from 'antd';
import * as subscriptions from '../graphql/subscriptions';
import {
  Navbar,
  StoriesDrawer,
  EstimationContainer,
} from '../Components';
import { getCurrentStoryId } from '../Store/Selectors/story.selector';
import './Estimation.scss';

Amplify.configure(aws_exports);

const mapStateToProps = state => ({
  storyId: getCurrentStoryId(state),
});

const mapDispatchToProps = dispatch => {
  return {
    addEstimateForStory: (user, estimate) => {
      dispatch(addEstimateToStory(user, estimate));
    },
    bulkAddEstimatesForStory: estimates => {
      dispatch(bulkAddEstimatesToStories(estimates));
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

  listEstimates = async storyId => {
    const { bulkAddEstimatesForStory } = this.props;
    const estimates = await listStoriesEstimate(storyId);
    const { items } = estimates.data.getStory.estimates;

    bulkAddEstimatesForStory(items);
  };

  render() {
    const { currentEpic, stories } = this.state;
    const { history, authData } = this.props;

    return (
      <>
        <Navbar title={currentEpic.title} history={history} />
        <Layout style={{ background: '#fff' }}>
          <EstimationContainer username={authData.username} />
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
