import React, { Component } from 'react'
import Amplify, { API, graphqlOperation } from 'aws-amplify'
import { withAuthenticator } from 'aws-amplify-react'
import aws_exports from '../aws-exports' // specify the location of aws-exports.js file on your project
import { addQuizScore } from '../Actions/question.action'
import { connect } from 'react-redux'
import { parse } from 'query-string'
import { listEpicStories } from '../Actions/CreateQuiz';
import { Button } from 'semantic-ui-react'

import './Estimation.scss'
import 'semantic-ui-css/semantic.min.css'

Amplify.configure(aws_exports)

const mapStateToProps = state => {
  return {
    quizQuestions: state.quiz.quizQuestions,
    quizId: state.quiz.quizId,
  }
}

const mapDispatchToProps = dispatch => {
  return {
    addCompletedQuizScore: quizScore => {
      dispatch(addQuizScore(quizScore))
    },
  }
}

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

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withAuthenticator(Estimation, { includeGreetings: false }))
