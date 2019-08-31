import React, { Component } from 'react';
import Amplify, { API, graphqlOperation, Auth } from 'aws-amplify';
import { withAuthenticator } from 'aws-amplify-react';
import { connect } from 'react-redux';
import aws_exports from '../aws-exports'; // specify the location of aws-exports.js file on your project
import { parse } from 'query-string';
import {
  getEpicForId,
  addEstimateToStory,
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
  };
};

const subscription = API.graphql(
  graphqlOperation(subscriptions.onCreateEstimate)
);

class Estimation extends Component {
  constructor(props) {
    super(props);

    this.state = {
      ...props.location.state,
      currentEpic: {},
    };
  }

  async componentDidMount() {
    const { search } = this.props.location;
    const { id } = parse(search);
    const result = await getEpicForId(id);

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
      currentEpic: {
        id,
        title: result.data.getEpic.title,
      },
    });
  }

  getCurrentUser = () => {
    Auth.currentAuthenticatedUser().then(user => {
      this.setState({ user });
    });
  };

  render() {
    const { currentEpic } = this.state;
    const { authData } = this.props;

    return (
      <>
        <Navbar title={currentEpic.title} />
        <Layout style={{ background: '#fff' }}>
          <EstimationContainer username={authData.username} />
          <StoriesDrawer />
        </Layout>
      </>
    );
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withAuthenticator(Estimation, { includeGreetings: false }));
