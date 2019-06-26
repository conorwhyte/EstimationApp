import {
  ADD_CURRENT_STORY,
} from '../../Actions/story.action'

interface AppState {
  storyId: string;
}

const initialState: AppState = {
  storyId: '',
}

const story = (state = initialState, action) => {
  switch (action.type) {
    case ADD_CURRENT_STORY:
      return {
        ...state,
        storyId: action.storyId,
      }
    default:
      return state
  }
}

export default story
