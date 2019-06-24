// tslint:disable
// this is an auto generated file. This will be overwritten

export const createEpic = `mutation CreateEpic($input: CreateEpicInput!) {
  createEpic(input: $input) {
    id
    title
    description
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
export const updateEpic = `mutation UpdateEpic($input: UpdateEpicInput!) {
  updateEpic(input: $input) {
    id
    title
    description
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
export const deleteEpic = `mutation DeleteEpic($input: DeleteEpicInput!) {
  deleteEpic(input: $input) {
    id
    title
    description
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
export const createStory = `mutation CreateStory($input: CreateStoryInput!) {
  createStory(input: $input) {
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
export const updateStory = `mutation UpdateStory($input: UpdateStoryInput!) {
  updateStory(input: $input) {
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
export const deleteStory = `mutation DeleteStory($input: DeleteStoryInput!) {
  deleteStory(input: $input) {
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
export const createEstimate = `mutation CreateEstimate($input: CreateEstimateInput!) {
  createEstimate(input: $input) {
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
export const updateEstimate = `mutation UpdateEstimate($input: UpdateEstimateInput!) {
  updateEstimate(input: $input) {
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
export const deleteEstimate = `mutation DeleteEstimate($input: DeleteEstimateInput!) {
  deleteEstimate(input: $input) {
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
