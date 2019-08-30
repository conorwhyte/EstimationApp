export const ListEpics = `
query MyEpics {
    listEpics(limit: 25) {
        nextToken
        items {
            id
            title
        }
    }
}`;

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
                version
                actualEstimate
                estimates (limit: 10) {
                  items {
                      id
                      estimate
                      user                
                  }
              }
            }
        }
    }
}`;

export const ListStoriesEstimates = `
query MyEstimates ($epicStoriesId: ID!){
    getStory(id: $epicStoriesId) {
        estimates (limit: 20) {
            items {
                id
                estimate
                user                
            }
        }
    }
}`;

export const onCreate = `subscription OnCreateStory($epicStoriesId: ID) {
  onCreateStory(epicStoriesId: $epicStoriesId) {
    id
    title
    epicStoriesId
    description
  }
}`;
