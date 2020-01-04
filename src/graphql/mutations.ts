// tslint:disable
// this is an auto generated file. This will be overwritten

export const createEpic = `mutation CreateEpic(
  $input: CreateEpicInput!
  $condition: ModelEpicConditionInput
) {
  createEpic(input: $input, condition: $condition) {
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
export const updateEpic = `mutation UpdateEpic(
  $input: UpdateEpicInput!
  $condition: ModelEpicConditionInput
) {
  updateEpic(input: $input, condition: $condition) {
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
export const deleteEpic = `mutation DeleteEpic(
  $input: DeleteEpicInput!
  $condition: ModelEpicConditionInput
) {
  deleteEpic(input: $input, condition: $condition) {
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
export const createStory = `mutation CreateStory(
  $input: CreateStoryInput!
  $condition: ModelStoryConditionInput
) {
  createStory(input: $input, condition: $condition) {
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
export const updateStory = `mutation UpdateStory(
  $input: UpdateStoryInput!
  $condition: ModelStoryConditionInput
) {
  updateStory(input: $input, condition: $condition) {
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
export const deleteStory = `mutation DeleteStory(
  $input: DeleteStoryInput!
  $condition: ModelStoryConditionInput
) {
  deleteStory(input: $input, condition: $condition) {
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
export const createEstimate = `mutation CreateEstimate(
  $input: CreateEstimateInput!
  $condition: ModelEstimateConditionInput
) {
  createEstimate(input: $input, condition: $condition) {
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
export const updateEstimate = `mutation UpdateEstimate(
  $input: UpdateEstimateInput!
  $condition: ModelEstimateConditionInput
) {
  updateEstimate(input: $input, condition: $condition) {
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
export const deleteEstimate = `mutation DeleteEstimate(
  $input: DeleteEstimateInput!
  $condition: ModelEstimateConditionInput
) {
  deleteEstimate(input: $input, condition: $condition) {
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
