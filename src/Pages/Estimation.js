import React, { Component } from 'react';
import Amplify, { API, graphqlOperation, Auth } from 'aws-amplify';
import { withAuthenticator } from 'aws-amplify-react';
import aws_exports from '../aws-exports'; // specify the location of aws-exports.js file on your project
import { parse } from 'query-string';
import {
  createStoryForQuiz,
  getEpicForId,
  listEpicStories,
} from '../Actions/CreateQuiz.ts';
import { Button, PageHeader, Tag, Layout } from 'antd';
import * as subscriptions from '../graphql/subscriptions';
import { AddStoryModal, AddEstimation, UserAvatar } from '../Components';
import { StoriesDrawer } from '../Components/StoriesDrawer';
import { Navbar } from '../Components/Navbar';
import './Estimation.scss';

Amplify.configure(aws_exports);

const subscription = API.graphql(graphqlOperation(subscriptions.onCreateStory));

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

    this.getEpicStories = this.getEpicStories.bind(this);
    this.createStory = this.createStory.bind(this);
    this.changeTitle = this.changeTitle.bind(this);
    this.showCreateModal = this.showCreateModal.bind(this);
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

    // subscription.subscribe({
    //   next: data => {
    //     if (data.value.data.onCreateStory.epicStoriesId === id) {
    //       console.log('Subscription succeeded');
    //     }
    //   },
    // });

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

  render() {
    const addStoryModalProps = {
      loading: false,
      createStory: this.createStory,
      showCreateModal: this.showCreateModal,
    };
    const { showCreateStoryModal, currentEpic, stories } = this.state;
    const { history } = this.props;
    const { Content, Sider } = Layout;

    const content = (
      <Content>
        <div className="Estimation-body">

          <br />
          <h3 style={{paddingLeft: '20px'}}> Story to be estimated: </h3>

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

          <AddStoryModal
            {...addStoryModalProps}
            visible={showCreateStoryModal}
          />

          {/* <AddEstimation />
          <br />
          <Button
            onClick={() => {
              this.showCreateModal(true);
            }}
          >
            Set Estimation
          </Button> */}

          {/* <Button onClick={this.getEpicStories}>Get stories for epic</Button> */}
          {/* <UserAvatar /> */}
        </div>
      </Content>
    );

    return (
      <>
        <Navbar title={currentEpic.title} history={history}/>
        <Layout style={{ background: '#fff' }}>
          {content}
          <StoriesDrawer stories={stories} />
        </Layout>
      </>
    );
  }
}

export default withAuthenticator(Estimation, { includeGreetings: false });
