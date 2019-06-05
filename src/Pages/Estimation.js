import React, { Component } from 'react';
import Amplify, { API, graphqlOperation, Auth } from 'aws-amplify';
import { withAuthenticator } from 'aws-amplify-react';
import aws_exports from '../aws-exports'; // specify the location of aws-exports.js file on your project
import { parse } from 'query-string';
import {
  listEpicStories,
  createStoryForQuiz,
  listEpics,
} from '../Actions/CreateQuiz.ts';
import { Button, PageHeader, Tag, Avatar } from 'antd';
import * as subscriptions from '../graphql/subscriptions';
import { AddStoryModal, AddEstimation, UserAvatar } from '../Components';
import { onCreate } from '../Actions/ApiActions';

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
    };

    this.getEpicStories = this.getEpicStories.bind(this);
    this.createStory = this.createStory.bind(this);
    this.changeTitle = this.changeTitle.bind(this);
    this.showCreateModal = this.showCreateModal.bind(this);
  }

  componentDidMount() {
    const { search } = this.props.location;
    const { id } = parse(search);
    subscription.subscribe({
      next: data => {
        if (data.value.data.onCreateStory.epicStoriesId === id) {
          console.log('CONRsO');
        }
      },
    });

    // this.getCurrentUser();
  }

  componentWillUnmount() {
    subscription.unsubscribe();
  }

  getCurrentUser() {
    Auth.currentAuthenticatedUser().then(user => {
      this.setState({ user });
    });
  }

  async getEpicStories() {
    const { search } = this.props.location;
    const { id } = parse(search);

    await listEpicStories(id);
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
    const { showCreateStoryModal } = this.state;

    return (
      <div className="Estimation-body">
        <PageHeader
          title="Epic Title"
          subTitle="This is a subtitle"
          tags={<Tag color="red">Warning</Tag>}
        />

        <h1> Story Title </h1>
        <h3> Give a short description here for the story. </h3>

        <Button
          onClick={() => {
            this.showCreateModal(true);
          }}
        >
          Create Story
        </Button>

        <AddStoryModal {...addStoryModalProps} visible={showCreateStoryModal} />

        <AddEstimation />
        <br />
        <Button
          onClick={() => {
            this.showCreateModal(true);
          }}
        >
          Set Estimation
        </Button>

        <br />
        <br />

        <UserAvatar />
      </div>
    );
  }
}

export default withAuthenticator(Estimation, { includeGreetings: false });
