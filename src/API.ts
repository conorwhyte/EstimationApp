/* tslint:disable */
//  This file was automatically generated and should not be edited.

export type CreateEpicInput = {
  id?: string | null,
  title: string,
  description?: string | null,
  tags?: Array< string | null > | null,
  links?: Array< string | null > | null,
  total?: number | null,
};

export type ModelEpicConditionInput = {
  title?: ModelStringInput | null,
  description?: ModelStringInput | null,
  tags?: ModelStringInput | null,
  links?: ModelStringInput | null,
  total?: ModelFloatInput | null,
  and?: Array< ModelEpicConditionInput | null > | null,
  or?: Array< ModelEpicConditionInput | null > | null,
  not?: ModelEpicConditionInput | null,
};

export type ModelStringInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export enum ModelAttributeTypes {
  binary = "binary",
  binarySet = "binarySet",
  bool = "bool",
  list = "list",
  map = "map",
  number = "number",
  numberSet = "numberSet",
  string = "string",
  stringSet = "stringSet",
  _null = "_null",
}


export type ModelSizeInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
};

export type ModelFloatInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
};

export type UpdateEpicInput = {
  id: string,
  title?: string | null,
  description?: string | null,
  tags?: Array< string | null > | null,
  links?: Array< string | null > | null,
  total?: number | null,
  expectedVersion: number,
};

export type DeleteEpicInput = {
  id?: string | null,
  expectedVersion: number,
};

export type CreateStoryInput = {
  id?: string | null,
  title: string,
  epicStoriesId?: string | null,
  description?: string | null,
  tags?: Array< string | null > | null,
  links?: Array< string | null > | null,
  avgEstimate?: number | null,
};

export type ModelStoryConditionInput = {
  title?: ModelStringInput | null,
  epicStoriesId?: ModelIDInput | null,
  description?: ModelStringInput | null,
  tags?: ModelStringInput | null,
  links?: ModelStringInput | null,
  avgEstimate?: ModelFloatInput | null,
  and?: Array< ModelStoryConditionInput | null > | null,
  or?: Array< ModelStoryConditionInput | null > | null,
  not?: ModelStoryConditionInput | null,
};

export type ModelIDInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export type UpdateStoryInput = {
  id: string,
  title?: string | null,
  epicStoriesId?: string | null,
  description?: string | null,
  tags?: Array< string | null > | null,
  links?: Array< string | null > | null,
  avgEstimate?: number | null,
  expectedVersion: number,
};

export type DeleteStoryInput = {
  id?: string | null,
  expectedVersion: number,
};

export type CreateEstimateInput = {
  id?: string | null,
  user?: string | null,
  estimate?: number | null,
  estimateStoryId?: string | null,
};

export type ModelEstimateConditionInput = {
  user?: ModelStringInput | null,
  estimate?: ModelFloatInput | null,
  and?: Array< ModelEstimateConditionInput | null > | null,
  or?: Array< ModelEstimateConditionInput | null > | null,
  not?: ModelEstimateConditionInput | null,
};

export type UpdateEstimateInput = {
  id: string,
  user?: string | null,
  estimate?: number | null,
  expectedVersion: number,
  estimateStoryId?: string | null,
};

export type DeleteEstimateInput = {
  id?: string | null,
  expectedVersion: number,
};

export type ModelEpicFilterInput = {
  id?: ModelIDInput | null,
  title?: ModelStringInput | null,
  description?: ModelStringInput | null,
  tags?: ModelStringInput | null,
  links?: ModelStringInput | null,
  total?: ModelFloatInput | null,
  and?: Array< ModelEpicFilterInput | null > | null,
  or?: Array< ModelEpicFilterInput | null > | null,
  not?: ModelEpicFilterInput | null,
};

export type ModelStoryFilterInput = {
  id?: ModelIDInput | null,
  title?: ModelStringInput | null,
  epicStoriesId?: ModelIDInput | null,
  description?: ModelStringInput | null,
  tags?: ModelStringInput | null,
  links?: ModelStringInput | null,
  avgEstimate?: ModelFloatInput | null,
  and?: Array< ModelStoryFilterInput | null > | null,
  or?: Array< ModelStoryFilterInput | null > | null,
  not?: ModelStoryFilterInput | null,
};

export type ModelEstimateFilterInput = {
  id?: ModelIDInput | null,
  user?: ModelStringInput | null,
  estimate?: ModelFloatInput | null,
  and?: Array< ModelEstimateFilterInput | null > | null,
  or?: Array< ModelEstimateFilterInput | null > | null,
  not?: ModelEstimateFilterInput | null,
};

export type CreateEpicMutationVariables = {
  input: CreateEpicInput,
  condition?: ModelEpicConditionInput | null,
};

export type CreateEpicMutation = {
  createEpic:  {
    __typename: "Epic",
    id: string,
    title: string,
    description: string | null,
    tags: Array< string | null > | null,
    links: Array< string | null > | null,
    total: number | null,
    stories:  {
      __typename: "ModelStoryConnection",
      items:  Array< {
        __typename: "Story",
        id: string,
        title: string,
        epicStoriesId: string | null,
        description: string | null,
        tags: Array< string | null > | null,
        links: Array< string | null > | null,
        avgEstimate: number | null,
        version: number,
      } | null > | null,
      nextToken: string | null,
    } | null,
    version: number,
  } | null,
};

export type UpdateEpicMutationVariables = {
  input: UpdateEpicInput,
  condition?: ModelEpicConditionInput | null,
};

export type UpdateEpicMutation = {
  updateEpic:  {
    __typename: "Epic",
    id: string,
    title: string,
    description: string | null,
    tags: Array< string | null > | null,
    links: Array< string | null > | null,
    total: number | null,
    stories:  {
      __typename: "ModelStoryConnection",
      items:  Array< {
        __typename: "Story",
        id: string,
        title: string,
        epicStoriesId: string | null,
        description: string | null,
        tags: Array< string | null > | null,
        links: Array< string | null > | null,
        avgEstimate: number | null,
        version: number,
      } | null > | null,
      nextToken: string | null,
    } | null,
    version: number,
  } | null,
};

export type DeleteEpicMutationVariables = {
  input: DeleteEpicInput,
  condition?: ModelEpicConditionInput | null,
};

export type DeleteEpicMutation = {
  deleteEpic:  {
    __typename: "Epic",
    id: string,
    title: string,
    description: string | null,
    tags: Array< string | null > | null,
    links: Array< string | null > | null,
    total: number | null,
    stories:  {
      __typename: "ModelStoryConnection",
      items:  Array< {
        __typename: "Story",
        id: string,
        title: string,
        epicStoriesId: string | null,
        description: string | null,
        tags: Array< string | null > | null,
        links: Array< string | null > | null,
        avgEstimate: number | null,
        version: number,
      } | null > | null,
      nextToken: string | null,
    } | null,
    version: number,
  } | null,
};

export type CreateStoryMutationVariables = {
  input: CreateStoryInput,
  condition?: ModelStoryConditionInput | null,
};

export type CreateStoryMutation = {
  createStory:  {
    __typename: "Story",
    id: string,
    title: string,
    epicStoriesId: string | null,
    description: string | null,
    tags: Array< string | null > | null,
    links: Array< string | null > | null,
    avgEstimate: number | null,
    estimates:  {
      __typename: "ModelEstimateConnection",
      items:  Array< {
        __typename: "Estimate",
        id: string,
        user: string | null,
        estimate: number | null,
        version: number,
      } | null > | null,
      nextToken: string | null,
    } | null,
    version: number,
  } | null,
};

export type UpdateStoryMutationVariables = {
  input: UpdateStoryInput,
  condition?: ModelStoryConditionInput | null,
};

export type UpdateStoryMutation = {
  updateStory:  {
    __typename: "Story",
    id: string,
    title: string,
    epicStoriesId: string | null,
    description: string | null,
    tags: Array< string | null > | null,
    links: Array< string | null > | null,
    avgEstimate: number | null,
    estimates:  {
      __typename: "ModelEstimateConnection",
      items:  Array< {
        __typename: "Estimate",
        id: string,
        user: string | null,
        estimate: number | null,
        version: number,
      } | null > | null,
      nextToken: string | null,
    } | null,
    version: number,
  } | null,
};

export type DeleteStoryMutationVariables = {
  input: DeleteStoryInput,
  condition?: ModelStoryConditionInput | null,
};

export type DeleteStoryMutation = {
  deleteStory:  {
    __typename: "Story",
    id: string,
    title: string,
    epicStoriesId: string | null,
    description: string | null,
    tags: Array< string | null > | null,
    links: Array< string | null > | null,
    avgEstimate: number | null,
    estimates:  {
      __typename: "ModelEstimateConnection",
      items:  Array< {
        __typename: "Estimate",
        id: string,
        user: string | null,
        estimate: number | null,
        version: number,
      } | null > | null,
      nextToken: string | null,
    } | null,
    version: number,
  } | null,
};

export type CreateEstimateMutationVariables = {
  input: CreateEstimateInput,
  condition?: ModelEstimateConditionInput | null,
};

export type CreateEstimateMutation = {
  createEstimate:  {
    __typename: "Estimate",
    id: string,
    user: string | null,
    estimate: number | null,
    story:  {
      __typename: "Story",
      id: string,
      title: string,
      epicStoriesId: string | null,
      description: string | null,
      tags: Array< string | null > | null,
      links: Array< string | null > | null,
      avgEstimate: number | null,
      estimates:  {
        __typename: "ModelEstimateConnection",
        nextToken: string | null,
      } | null,
      version: number,
    } | null,
    version: number,
  } | null,
};

export type UpdateEstimateMutationVariables = {
  input: UpdateEstimateInput,
  condition?: ModelEstimateConditionInput | null,
};

export type UpdateEstimateMutation = {
  updateEstimate:  {
    __typename: "Estimate",
    id: string,
    user: string | null,
    estimate: number | null,
    story:  {
      __typename: "Story",
      id: string,
      title: string,
      epicStoriesId: string | null,
      description: string | null,
      tags: Array< string | null > | null,
      links: Array< string | null > | null,
      avgEstimate: number | null,
      estimates:  {
        __typename: "ModelEstimateConnection",
        nextToken: string | null,
      } | null,
      version: number,
    } | null,
    version: number,
  } | null,
};

export type DeleteEstimateMutationVariables = {
  input: DeleteEstimateInput,
  condition?: ModelEstimateConditionInput | null,
};

export type DeleteEstimateMutation = {
  deleteEstimate:  {
    __typename: "Estimate",
    id: string,
    user: string | null,
    estimate: number | null,
    story:  {
      __typename: "Story",
      id: string,
      title: string,
      epicStoriesId: string | null,
      description: string | null,
      tags: Array< string | null > | null,
      links: Array< string | null > | null,
      avgEstimate: number | null,
      estimates:  {
        __typename: "ModelEstimateConnection",
        nextToken: string | null,
      } | null,
      version: number,
    } | null,
    version: number,
  } | null,
};

export type GetEpicQueryVariables = {
  id: string,
};

export type GetEpicQuery = {
  getEpic:  {
    __typename: "Epic",
    id: string,
    title: string,
    description: string | null,
    tags: Array< string | null > | null,
    links: Array< string | null > | null,
    total: number | null,
    stories:  {
      __typename: "ModelStoryConnection",
      items:  Array< {
        __typename: "Story",
        id: string,
        title: string,
        epicStoriesId: string | null,
        description: string | null,
        tags: Array< string | null > | null,
        links: Array< string | null > | null,
        avgEstimate: number | null,
        version: number,
      } | null > | null,
      nextToken: string | null,
    } | null,
    version: number,
  } | null,
};

export type ListEpicsQueryVariables = {
  filter?: ModelEpicFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListEpicsQuery = {
  listEpics:  {
    __typename: "ModelEpicConnection",
    items:  Array< {
      __typename: "Epic",
      id: string,
      title: string,
      description: string | null,
      tags: Array< string | null > | null,
      links: Array< string | null > | null,
      total: number | null,
      stories:  {
        __typename: "ModelStoryConnection",
        nextToken: string | null,
      } | null,
      version: number,
    } | null > | null,
    nextToken: string | null,
  } | null,
};

export type GetStoryQueryVariables = {
  id: string,
};

export type GetStoryQuery = {
  getStory:  {
    __typename: "Story",
    id: string,
    title: string,
    epicStoriesId: string | null,
    description: string | null,
    tags: Array< string | null > | null,
    links: Array< string | null > | null,
    avgEstimate: number | null,
    estimates:  {
      __typename: "ModelEstimateConnection",
      items:  Array< {
        __typename: "Estimate",
        id: string,
        user: string | null,
        estimate: number | null,
        version: number,
      } | null > | null,
      nextToken: string | null,
    } | null,
    version: number,
  } | null,
};

export type ListStoriesQueryVariables = {
  filter?: ModelStoryFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListStoriesQuery = {
  listStories:  {
    __typename: "ModelStoryConnection",
    items:  Array< {
      __typename: "Story",
      id: string,
      title: string,
      epicStoriesId: string | null,
      description: string | null,
      tags: Array< string | null > | null,
      links: Array< string | null > | null,
      avgEstimate: number | null,
      estimates:  {
        __typename: "ModelEstimateConnection",
        nextToken: string | null,
      } | null,
      version: number,
    } | null > | null,
    nextToken: string | null,
  } | null,
};

export type GetEstimateQueryVariables = {
  id: string,
};

export type GetEstimateQuery = {
  getEstimate:  {
    __typename: "Estimate",
    id: string,
    user: string | null,
    estimate: number | null,
    story:  {
      __typename: "Story",
      id: string,
      title: string,
      epicStoriesId: string | null,
      description: string | null,
      tags: Array< string | null > | null,
      links: Array< string | null > | null,
      avgEstimate: number | null,
      estimates:  {
        __typename: "ModelEstimateConnection",
        nextToken: string | null,
      } | null,
      version: number,
    } | null,
    version: number,
  } | null,
};

export type ListEstimatesQueryVariables = {
  filter?: ModelEstimateFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListEstimatesQuery = {
  listEstimates:  {
    __typename: "ModelEstimateConnection",
    items:  Array< {
      __typename: "Estimate",
      id: string,
      user: string | null,
      estimate: number | null,
      story:  {
        __typename: "Story",
        id: string,
        title: string,
        epicStoriesId: string | null,
        description: string | null,
        tags: Array< string | null > | null,
        links: Array< string | null > | null,
        avgEstimate: number | null,
        version: number,
      } | null,
      version: number,
    } | null > | null,
    nextToken: string | null,
  } | null,
};

export type OnCreateEpicSubscription = {
  onCreateEpic:  {
    __typename: "Epic",
    id: string,
    title: string,
    description: string | null,
    tags: Array< string | null > | null,
    links: Array< string | null > | null,
    total: number | null,
    stories:  {
      __typename: "ModelStoryConnection",
      items:  Array< {
        __typename: "Story",
        id: string,
        title: string,
        epicStoriesId: string | null,
        description: string | null,
        tags: Array< string | null > | null,
        links: Array< string | null > | null,
        avgEstimate: number | null,
        version: number,
      } | null > | null,
      nextToken: string | null,
    } | null,
    version: number,
  } | null,
};

export type OnUpdateEpicSubscription = {
  onUpdateEpic:  {
    __typename: "Epic",
    id: string,
    title: string,
    description: string | null,
    tags: Array< string | null > | null,
    links: Array< string | null > | null,
    total: number | null,
    stories:  {
      __typename: "ModelStoryConnection",
      items:  Array< {
        __typename: "Story",
        id: string,
        title: string,
        epicStoriesId: string | null,
        description: string | null,
        tags: Array< string | null > | null,
        links: Array< string | null > | null,
        avgEstimate: number | null,
        version: number,
      } | null > | null,
      nextToken: string | null,
    } | null,
    version: number,
  } | null,
};

export type OnDeleteEpicSubscription = {
  onDeleteEpic:  {
    __typename: "Epic",
    id: string,
    title: string,
    description: string | null,
    tags: Array< string | null > | null,
    links: Array< string | null > | null,
    total: number | null,
    stories:  {
      __typename: "ModelStoryConnection",
      items:  Array< {
        __typename: "Story",
        id: string,
        title: string,
        epicStoriesId: string | null,
        description: string | null,
        tags: Array< string | null > | null,
        links: Array< string | null > | null,
        avgEstimate: number | null,
        version: number,
      } | null > | null,
      nextToken: string | null,
    } | null,
    version: number,
  } | null,
};

export type OnCreateStorySubscription = {
  onCreateStory:  {
    __typename: "Story",
    id: string,
    title: string,
    epicStoriesId: string | null,
    description: string | null,
    tags: Array< string | null > | null,
    links: Array< string | null > | null,
    avgEstimate: number | null,
    estimates:  {
      __typename: "ModelEstimateConnection",
      items:  Array< {
        __typename: "Estimate",
        id: string,
        user: string | null,
        estimate: number | null,
        version: number,
      } | null > | null,
      nextToken: string | null,
    } | null,
    version: number,
  } | null,
};

export type OnUpdateStorySubscription = {
  onUpdateStory:  {
    __typename: "Story",
    id: string,
    title: string,
    epicStoriesId: string | null,
    description: string | null,
    tags: Array< string | null > | null,
    links: Array< string | null > | null,
    avgEstimate: number | null,
    estimates:  {
      __typename: "ModelEstimateConnection",
      items:  Array< {
        __typename: "Estimate",
        id: string,
        user: string | null,
        estimate: number | null,
        version: number,
      } | null > | null,
      nextToken: string | null,
    } | null,
    version: number,
  } | null,
};

export type OnDeleteStorySubscription = {
  onDeleteStory:  {
    __typename: "Story",
    id: string,
    title: string,
    epicStoriesId: string | null,
    description: string | null,
    tags: Array< string | null > | null,
    links: Array< string | null > | null,
    avgEstimate: number | null,
    estimates:  {
      __typename: "ModelEstimateConnection",
      items:  Array< {
        __typename: "Estimate",
        id: string,
        user: string | null,
        estimate: number | null,
        version: number,
      } | null > | null,
      nextToken: string | null,
    } | null,
    version: number,
  } | null,
};

export type OnCreateEstimateSubscription = {
  onCreateEstimate:  {
    __typename: "Estimate",
    id: string,
    user: string | null,
    estimate: number | null,
    story:  {
      __typename: "Story",
      id: string,
      title: string,
      epicStoriesId: string | null,
      description: string | null,
      tags: Array< string | null > | null,
      links: Array< string | null > | null,
      avgEstimate: number | null,
      estimates:  {
        __typename: "ModelEstimateConnection",
        nextToken: string | null,
      } | null,
      version: number,
    } | null,
    version: number,
  } | null,
};

export type OnUpdateEstimateSubscription = {
  onUpdateEstimate:  {
    __typename: "Estimate",
    id: string,
    user: string | null,
    estimate: number | null,
    story:  {
      __typename: "Story",
      id: string,
      title: string,
      epicStoriesId: string | null,
      description: string | null,
      tags: Array< string | null > | null,
      links: Array< string | null > | null,
      avgEstimate: number | null,
      estimates:  {
        __typename: "ModelEstimateConnection",
        nextToken: string | null,
      } | null,
      version: number,
    } | null,
    version: number,
  } | null,
};

export type OnDeleteEstimateSubscription = {
  onDeleteEstimate:  {
    __typename: "Estimate",
    id: string,
    user: string | null,
    estimate: number | null,
    story:  {
      __typename: "Story",
      id: string,
      title: string,
      epicStoriesId: string | null,
      description: string | null,
      tags: Array< string | null > | null,
      links: Array< string | null > | null,
      avgEstimate: number | null,
      estimates:  {
        __typename: "ModelEstimateConnection",
        nextToken: string | null,
      } | null,
      version: number,
    } | null,
    version: number,
  } | null,
};
