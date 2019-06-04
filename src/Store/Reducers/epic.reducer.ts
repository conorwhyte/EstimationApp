import {
  ADD_EPIC_ID,
} from '../../Actions/epic.action'

interface AppState {
  epicId: string;
}

const initialState: AppState = {
  epicId: '',
}

const epic = (state = initialState, action) => {
  switch (action.type) {
    case ADD_EPIC_ID:
      return {
        ...state,
        epicId: action.epicId,
      }
    default:
      return state
  }
}

export default epic
