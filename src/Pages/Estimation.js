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
} from '../Actions/CreateQuiz.ts';
import { Button, PageHeader, Tag, Layout } from 'antd';
import * as subscriptions from '../graphql/subscriptions';
import { AddStoryModal, AddEstimation, UserAvatar } from '../Components';
import { StoriesDrawer } from '../Components/StoriesDrawer';
import { Navbar } from '../Components/Navbar';
import { getCurrentStoryId, getEstimatesForStories } from '../Store/Selectors/story.selector';
import { addStoryId, addEstimateToStory } from '../Actions/story.action';
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
  };
};

const openSuccessNotification = (storyName, totalWag) => {
  notification['success']({
    message: 'Completed story',
    description: `Story ${storyName} has been completed, with a total WAG of ${totalWag}`,
  });
};

const getCurrentStory = (stories, storyId) => 
  stories.filter(item => item.id === storyId)[0]

const subscription = API.graphql(graphqlOperation(subscriptions.onCreateEstimate));

class Estimation extends Component {
  constructor(props) {
    super(props);

    this.state = {
      ...props.location.state,
      storyTitle: '',
      showCreateStoryModal: false,
      currentEpic: {},
      stories: [],
    };

    this.createStory = this.createStory.bind(this);
    this.changeTitle = this.changeTitle.bind(this);
    this.sendEstimate = this.sendEstimate.bind(this);
    this.getEpicStories = this.getEpicStories.bind(this);
    this.showCreateModal = this.showCreateModal.bind(this);
    this.addCurrentStory = this.addCurrentStory.bind(this);
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

  componentWillUnmount() {
    // subscription.unsubscribe();
  }

  getCurrentUser() {
    Auth.currentAuthenticatedUser().then(user => {
      this.setState({ user });
    });
  }

  async getEpicStories() {
    const { search } = this.props.location;
    const { id } = parse(search);

    return await listEpicStories(id);
  }

  async createStory(input) {
    const { search } = this.props.location;
    const { id } = parse(search);

    await createStoryForQuiz(id, input);
  }

  changeTitle(event) {
    this.setState({
      storyTitle: event.target.value,
    });
  }

  showCreateModal(flag) {
    this.setState({
      showCreateStoryModal: flag,
    });
  }
  
  addCurrentStory(story) {
    const { addCurrentStoryId } = this.props;
    addCurrentStoryId(story);
  }

  async sendEstimate(estimate) {
    const { storyId, authData } = this.props;
    await addEstimateForStory(storyId, estimate, authData.username);
  }

  render() {
    const { showCreateStoryModal, currentEpic, stories } = this.state;
    const { history, storyId, estimateForStories } = this.props;
    const { Content, Sider } = Layout;
    const currentStory = getCurrentStory(stories, storyId);
    const addStoryModalProps = {
      loading: false,
      createStory: this.createStory,
      showCreateModal: this.showCreateModal,
      visible: showCreateStoryModal
    };

   const users = estimateForStories.map(item => <UserAvatar key={item.user} user={item.user} estimate={item.estimate} />);

    const content = (
      <Content>
        <div className="Estimation-body">
          <div className='Estimation-body-header' >
            <h3> Pick a story to be estimated or create one </h3>

            <Button
              onClick={() => {
                this.showCreateModal(true);
              }}> Create New Story 
            </Button>

            <Button
              type="primary"
              onClick={() => {
                this.showCreateModal(true);
              }}> Complete Story 
            </Button>

            <Button
              type="danger"
              onClick={() => {
                this.showCreateModal(true);
              }}> Delete Story 
            </Button>
          </div>

          <AddStoryModal {...addStoryModalProps}/>

          { currentStory && <AddEstimation storyTitle={currentStory.title || ''} sendEstimate={this.sendEstimate}/> }

          <br />
          <br />
          
          { users }
        </div>
      </Content>
    );

    return (
      <>
        <Navbar title={currentEpic.title} history={history}/>
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
