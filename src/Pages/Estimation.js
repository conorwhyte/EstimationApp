import React, { Component, useState } from 'react'
import Amplify,  { API, graphqlOperation, Auth } from 'aws-amplify'
import { withAuthenticator } from 'aws-amplify-react'
import aws_exports from '../aws-exports' // specify the location of aws-exports.js file on your project
import { parse } from 'query-string'
import { listEpicStories, createStoryForQuiz, listEpics } from '../Actions/CreateQuiz.ts';
import { Button, Input, PageHeader, Tag, Card, Col, Row, Avatar} from 'antd'
import * as subscriptions from '../graphql/subscriptions';

import './Estimation.scss'

Amplify.configure(aws_exports)

const subscription = API.graphql(
  graphqlOperation(subscriptions.onCreateStory)
);

class Estimation extends Component {
  constructor(props) {
    super(props);

    this.state = {
      ...props.location.state,
      storyTitle: '',
    };

    this.getEpicStories = this.getEpicStories.bind(this);
    this.createStory = this.createStory.bind(this);
    this.changeTitle = this.changeTitle.bind(this);
  }
  
  componentDidMount() {
    subscription.subscribe({
      next: (todoData) => console.log('CONRO SUB', todoData)
    });
    
    // this.getCurrentUser();
  }

  componentWillUnmount() {
    subscription.unsubscribe();
  }

  getCurrentUser() {
    Auth.currentAuthenticatedUser()
    .then(user => {
      this.setState({user});
    })
  }

  async getEpicStories() {
    const { search } = this.props.location;
    const { id } = parse(search);
    
    await listEpicStories(id)
  }

  async createStory() {
    const { storyTitle } = this.state;
    const { search } = this.props.location;
    const { id } = parse(search);

    await createStoryForQuiz(id, storyTitle);
  }

  changeTitle(event) {
    this.setState({
      storyTitle: event.target.value,
    });
  }
 
  render() {
    return (
      <div className='Estimation-body'>
       <PageHeader
          title="Epic Title"
          subTitle="This is a subtitle"
          tags={<Tag color="red">Warning</Tag>} />
          
        <h1> Story Title </h1>
        <h3> Give a short description here for the story. </h3>

        <div className='Estimation-input'>
          <Input size="large" placeholder="Epic title" onChange={this.changeTitle}/>
          <Input placeholder="Description" />
          
          <Button onClick={this.createStory}>
            Create Story
          </Button>
          <Button onClick={this.getEpicStories}>
            Get Story
          </Button>
        </div>

        <div className='Estimation-cards'>
          <Row gutter={16}>
            <Col span={5}>
              <Card onClick={() =>{console.log('CONOR')}} title="WAG" hoverable style={{ width: 200, textAlign: 'center' }}>
                <h2> 0.5 </h2>
              </Card>
            </Col>
            <Col span={5}>
              <Card title="WAG" hoverable style={{ border: '2px solid #ff0000', width: 200, textAlign: 'center' }}>
                <h2> 0.25 </h2>
              </Card>
            </Col>
            <Col span={5}>
              <Card title="WAG" hoverable style={{ width: 200, textAlign: 'center' }}>
                <h2> 0.1 </h2>
              </Card>
            </Col>
            <Col span={5}>
              <Card title="WAG" hoverable style={{ width: 200, textAlign: 'center' }}>
                <Input />
              </Card>
            </Col>
          </Row>
        </div>

        <br />
        <div className='Estimation-avatar'>
          <Avatar style={{ backgroundColor: '#6ab5f2', verticalAlign: 'middle' }} size="large">
            {'CW'}
          </Avatar>
          <h2> 0.25 </h2>
        </div>
        
      </div>
    );
  }
}

export default withAuthenticator(Estimation, { includeGreetings: false })
