import React, { Component } from 'react'
import Amplify, { API, graphqlOperation } from 'aws-amplify'
import { withAuthenticator } from 'aws-amplify-react'
import aws_exports from '../aws-exports' // specify the location of aws-exports.js file on your project
import { addQuizScore } from '../Actions/question.action'
import { connect } from 'react-redux'

import './Quiz.scss'
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

class Quiz extends Component {
  render() {
    return (
      <div className="Quiz-body"> </div>
    )
  }
}

export default connect(
  mapStateToProps, 
  mapDispatchToProps,
)(withAuthenticator(Quiz, { includeGreetings: true }))