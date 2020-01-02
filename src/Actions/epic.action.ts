export const ADD_EPIC_ID = 'QUIZ::ADD_EPIC_ID'
export const CREATE_EPIC = 'QUIZ::CREATE_EPIC'
export const CHANGE_EPIC_SCALE = 'QUIZ::CHANGE_EPIC_SCALE'

export enum EstimationScale {
  Wag = 'wag',
  Points = 'story',
}

export const createEpic = (epicName: string, description: string) => ({
  type: CREATE_EPIC,
  epicName,
  description,
})

export const addEpicId = (epicId: string) => ({
  type: ADD_EPIC_ID,
  epicId,
})

export const changeEpicScale = (estimateScale: EstimationScale) => ({
  type: CHANGE_EPIC_SCALE,
  estimateScale,
})