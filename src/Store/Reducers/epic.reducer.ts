import {
  ADD_EPIC_ID,
  CHANGE_EPIC_SCALE,
  EstimationScale,
} from '../../Actions/epic.action'

interface AppState {
  epicId: string;
  estimateScale: string;
}

const initialState: AppState = {
  epicId: '',
  estimateScale: EstimationScale.Wag,
}

const epic = (state = initialState, action) => {
  switch (action.type) {
    case ADD_EPIC_ID:
      return {
        ...state,
        epicId: action.epicId,
      }
    case CHANGE_EPIC_SCALE:
      return {
        ...state,
        estimateScale: action.estimateScale,
      }
    default:
      return state
  }
}

export default epic
