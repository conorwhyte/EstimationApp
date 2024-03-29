export const ADD_CURRENT_STORY = 'ESTIMATE::ADD_CURRENT_STORY';
export const CREATE_STORY = 'QUIZ::CREATE_STORY'
export const ADD_ESTIMATE_TO_STORY = 'ESTIMATE::ADD_ESTIMATE_TO_STORY';
export const BULK_ADD_ESTIMATES_TO_STORY = 'ESTIMATE::BULK_ADD_ESTIMATES_TO_STORY';
export const CLEAR_CURRENT_STORY = 'ESTIMATE::CLEAR_CURRENT_STORY';

export const addStoryId = (storyId: string) => ({
  type: ADD_CURRENT_STORY,
  storyId,
});

export const addEstimateToStory = (user: string, estimate: number) => ({
  type: ADD_ESTIMATE_TO_STORY,
  user,
  estimate,
});

export const bulkAddEstimatesToStories = (estimates: any) => ({
  type: BULK_ADD_ESTIMATES_TO_STORY,
  estimates,
});

export const clearCurrentStory = () => ({
  type: CLEAR_CURRENT_STORY,
})