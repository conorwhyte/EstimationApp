export const ADD_EPIC_ID = 'QUIZ::ADD_EPIC_ID'
export const CREATE_EPIC = 'QUIZ::CREATE_EPIC'

export const createEpic = (epicName: string) => ({
  type: CREATE_EPIC,
  epicName,
})

export const addEpicId = (epicId: string) => ({
  type: ADD_EPIC_ID,
  epicId,
})
