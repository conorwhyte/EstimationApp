export const getStory = state => state.story;

export const getCurrentStoryId = state => getStory(state).storyId;

export const getEstimatesForStories = state => getStory(state).storiesEstimates;

export const getAverageEstimate = state => {
    const estimates = getStory(state).storiesEstimates;

    return estimates.reduce((a, b) => a + b.estimate, 0) / estimates.length
};
