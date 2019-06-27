export const getStory = state => state.story;

export const getCurrentStoryId = state => getStory(state).storyId;

export const getEstimatesForStories = state => getStory(state).storiesEstimates;
