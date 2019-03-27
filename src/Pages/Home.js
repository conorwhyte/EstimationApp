import React, { Component } from 'react'
import Amplify from 'aws-amplify'
import { withAuthenticator } from 'aws-amplify-react'
import aws_exports from '../aws-exports' // specify the location of aws-exports.js file on your project
import {
  addQuestion,
  addQuizQuestions,
  addQuizId,
  addStoredQuestions,
} from '../Actions/question.action'
import { connect } from 'react-redux'
import { Form } from 'semantic-ui-react'
import { EpicCreationForm } from '../Components/EpicCreationFrom'
import { createNewEpic } from '../Actions/CreateQuiz'

import 'semantic-ui-css/semantic.min.css'
import './Home.scss'
import 'babel-polyfill'

Amplify.configure(aws_exports)

const mapStateToProps = state => ({
  quiz: state,
  quizQuestions: state.quiz.quizQuestions,
  storedQuestions: state.quiz.storedQuestions,
  quizScore: state.quiz.quizScore,
})

const mapDispatchToProps = dispatch => {
  return {
    addQuestionToQuiz: question => {
      dispatch(addQuestion(question))
    },
    addQuestionsToQuiz: questions => {
      dispatch(addQuizQuestions(questions))
    },
    addCurrentQuizId: quizId => {
      dispatch(addQuizId(quizId))
    },
    storeCurrentQuestions: questions => {
      dispatch(addStoredQuestions(questions))
    },
  }
}

class Home extends Component {
  constructor(props) {
    super(props)

    this.state = {
      epicName: 'Conor crazy epic',
    }

    this.createEpic = this.createEpic.bind(this)
    this.setEpicName = this.setEpicName.bind(this)
  }

  async createEpic() {
    const { epicName } = this.state
    const epicId = await createNewEpic(epicName)

    console.log('EPIC ID', epicId)

    this.props.history.push(`/estimation?id=${epicId}`)
  }

  setEpicName(event) {
    console.log('Event', event)
  }

  render() {
    return (
      <div className="Home-body">
        <Form>
          <EpicCreationForm
            onCreate={this.createEpic}
            onInputChange={this.setEpicName}
          />
        </Form>
      </div>
    )
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withAuthenticator(Home, { includeGreetings: false }))
