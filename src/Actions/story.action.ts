export const ADD_CURRENT_STORY = 'ESTIMATE::ADD_CURRENT_STORY';
export const CREATE_EPIC = 'QUIZ::CREATE_EPIC'
export const ADD_ESTIMATE_TO_STORY = 'ESTIMATE::ADD_ESTIMATE_TO_STORY';
export const BULK_ADD_ESTIMATES_TO_STORY = 'ESTIMATE::BULK_ADD_ESTIMATES_TO_STORY';

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
})