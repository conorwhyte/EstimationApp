// tslint:disable
// this is an auto generated file. This will be overwritten

export const getEpic = `query GetEpic($id: ID!) {
  getEpic(id: $id) {
    id
    title
    tags
    links
    total
    stories {
      items {
        id
        title
        epicStoriesId
        description
        tags
        links
        avgEstimate
        version
      }
      nextToken
    }
    version
  }
}
`;
export const listEpics = `query ListEpics(
  $filter: ModelEpicFilterInput
  $limit: Int
  $nextToken: String
) {
  listEpics(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      title
      tags
      links
      total
      stories {
        nextToken
      }
      version
    }
    nextToken
  }
}
`;
export const getStory = `query GetStory($id: ID!) {
  getStory(id: $id) {
    id
    title
    epicStoriesId
    description
    tags
    links
    avgEstimate
    estimates {
      items {
        id
        user
        estimate
        version
      }
      nextToken
    }
    version
  }
}
`;
export const listStories = `query ListStories(
  $filter: ModelStoryFilterInput
  $limit: Int
  $nextToken: String
) {
  listStories(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      title
      epicStoriesId
      description
      tags
      links
      avgEstimate
      estimates {
        nextToken
      }
      version
    }
    nextToken
  }
}
`;
export const getEstimate = `query GetEstimate($id: ID!) {
  getEstimate(id: $id) {
    id
    user
    estimate
    story {
      id
      title
      epicStoriesId
      description
      tags
      links
      avgEstimate
      estimates {
        nextToken
      }
      version
    }
    version
  }
}
`;
export const listEstimates = `query ListEstimates(
  $filter: ModelEstimateFilterInput
  $limit: Int
  $nextToken: String
) {
  listEstimates(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      user
      estimate
      story {
        id
        title
        epicStoriesId
        description
        tags
        links
        avgEstimate
        version
      }
      version
    }
    nextToken
  }
}
`;
