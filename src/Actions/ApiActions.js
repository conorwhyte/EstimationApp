export const QNewEpic = `
mutation (
  $title: String!,
  ) {
  createEpic(input: {
    title: $title
  })
  {
   id
   title
  }
}`

export const QNewStory = `
mutation (
  $title: String!,
  $epicId: ID,
  ) {
  createStory(input: {
    title: $title,
    epicStoriesId: $epicId
  })
  {
   id
   title
   }
}`

export const QNewAnswer = `
mutation (
  $text: String,
  $correct: Boolean,
  $questionId: ID
  ) {
  createAnswer(input: {
    text: $text,
    correct: $correct,
    answerQuestionId: $questionId
  })
  {
   id
   }
}`

export const ListQuestions = `
query ListQuestion {
    listQuestions(limit: 100) {
      items {
        id
        text
      }
    }
  }`

export const ListEpics = `
query MyEpics {
    listEpics(limit: 25) {
        nextToken
        items {
            id
            title
        }
    }
}`

// estimates {
//   items { id title }
// }
export const ListEpicStories = `
query MyStories ($epicID: ID!){
    getEpic(id: $epicID) {
        stories (limit: 20) {
            items {
                id
                tags
                title
                links
                description
                
            }
        }
    }
}`

export const onCreate = `subscription OnCreateStory($epicStoriesId: ID) {
  onCreateStory(epicStoriesId: $epicStoriesId) {
    id
    title
    epicStoriesId
    description
  }
}
`;