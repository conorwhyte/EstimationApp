export const ADD_CURRENT_STORY = 'ESTIMATE::ADD_CURRENT_STORY';
export const CREATE_EPIC = 'QUIZ::CREATE_EPIC'
export const ADD_ESTIMATE_TO_STORY = 'ESTIMATE::ADD_ESTIMATE_TO_STORY';

export const addStoryId = (storyId: string) => ({
  type: ADD_CURRENT_STORY,
  storyId,
});

export const addEstimateToStory = (user: string, estimate: number) => ({
  type: ADD_ESTIMATE_TO_STORY,
  user,
  estimate,
});