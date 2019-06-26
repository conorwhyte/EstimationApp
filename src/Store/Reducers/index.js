import { combineReducers } from 'redux';
import epic from './epic.reducer';
import story from './story.reducer';

export default combineReducers({
  epic,
  story,
});
