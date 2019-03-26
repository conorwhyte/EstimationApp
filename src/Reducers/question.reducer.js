import {
  ADD_QUIZ_QUESTIONS,
  ADD_STORED_QUESTIONS,
  ADD_QUIZ_ID,
  ADD_QUIZ_SCORE,
} from '../Actions/question.action'

const initialState = {
  quizReady: false,
  quizId: '',
  quizQuestions: [],
  storedQuestions: [],
  quizScore: '',
}

const quiz = (state = initialState, action) => {
  switch (action.type) {
    case ADD_QUIZ_QUESTIONS:
      return {
        ...state,
        quizQuestions: concatArrays(state.quizQuestions, action),
      }
    case ADD_STORED_QUESTIONS:
      return {
        ...state,
        storedQuestions: action.questions,
      }
    case ADD_QUIZ_ID:
      return {
        ...state,
        quizId: action.quizId,
      }
    case ADD_QUIZ_SCORE:
      return {
        ...state,
        quizScore: action.quizScore,
        quizQuestions: [],
      }
    default:
      return state
  }
}

export default quiz
