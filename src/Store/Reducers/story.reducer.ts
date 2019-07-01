import {
  ADD_CURRENT_STORY,
  ADD_ESTIMATE_TO_STORY,
  BULK_ADD_ESTIMATES_TO_STORY,
} from '../../Actions/story.action'

interface AppState {
  storyId: string;
  storiesEstimates: any;
}

const initialState: AppState = {
  storyId: '',
  storiesEstimates: [],
}

const story = (state = initialState, action) => {
  switch (action.type) {
    case ADD_CURRENT_STORY:
      return {
        ...state,
        storyId: action.storyId,
      }
    case ADD_ESTIMATE_TO_STORY: 
      const { user, estimate } = action;
      return {
        ...state,
        storiesEstimates: [...state.storiesEstimates, {
          user,
          estimate,
        }],
      };
    case BULK_ADD_ESTIMATES_TO_STORY: 
      const { estimates } = action;
      return {
        ...state,
        storiesEstimates: [...state.storiesEstimates, ...estimates],
      };
    default:
      return state
  }
}

export default story
