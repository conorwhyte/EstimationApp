export const ADD_CURRENT_STORY = 'ESTIMATE::ADD_CURRENT_STORY'
export const CREATE_EPIC = 'QUIZ::CREATE_EPIC'

export const addStoryId = (storyId: string) => ({
  type: ADD_CURRENT_STORY,
  storyId,
})
