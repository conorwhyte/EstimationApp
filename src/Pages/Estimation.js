import React, { Component } from 'react'
import Amplify from 'aws-amplify'
import { withAuthenticator } from 'aws-amplify-react'
import aws_exports from '../aws-exports' // specify the location of aws-exports.js file on your project
import { parse } from 'query-string'
import { listEpicStories } from '../Actions/CreateQuiz';
import { Button } from 'semantic-ui-react'

import './Estimation.scss'
import 'semantic-ui-css/semantic.min.css'

Amplify.configure(aws_exports)

class Estimation extends Component {
  constructor(props) {
    super(props);

    this.state = {
      ...props.location.state
    };

    this.getEpic = this.getEpic.bind(this);
  }

  async getEpic() {
    const { search } = this.props.location;
    const { id } = parse(search);
    const data = await listEpicStories(id)
    console.log('DATE', data);
  }
 
  render() {
    return (
      <div className="Quiz-body">
        <Button onClick={this.getEpic} />
      </div>
    );
  }
}

export default withAuthenticator(Estimation, { includeGreetings: false })
