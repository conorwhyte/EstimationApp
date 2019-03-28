import {
  ADD_EPIC_ID,
} from '../Actions/epic.action'

interface AppState {
  quizId: string;
}

const initialState: AppState = {
  quizId: '',
}

const epic = (state = initialState, action) => {
  switch (action.type) {
    case ADD_EPIC_ID:
      return {
        ...state,
        quizId: action.quizId,
      }
    default:
      return state
  }
}

export default epic
