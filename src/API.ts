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
  actualEstimate?: number | null,
};

export type UpdateStoryInput = {
  id: string,
  title?: string | null,
  epicStoriesId?: string | null,
  description?: string | null,
  tags?: Array< string | null > | null,
  links?: Array< string | null > | null,
  avgEstimate?: number | null,
  actualEstimate?: number | null,
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

export type UpdateEstimateInput = {
  id: string,
  user?: string | null,
  estimate?: number | null,
  estimateStoryId?: string | null,
  expectedVersion: number,
};

export type DeleteEstimateInput = {
  id?: string | null,
  expectedVersion: number,
};

export type ModelEpicFilterInput = {
  id?: ModelIDFilterInput | null,
  title?: ModelStringFilterInput | null,
  description?: ModelStringFilterInput | null,
  tags?: ModelStringFilterInput | null,
  links?: ModelStringFilterInput | null,
  total?: ModelFloatFilterInput | null,
  and?: Array< ModelEpicFilterInput | null > | null,
  or?: Array< ModelEpicFilterInput | null > | null,
  not?: ModelEpicFilterInput | null,
};

export type ModelIDFilterInput = {
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
};

export type ModelStringFilterInput = {
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
};

export type ModelFloatFilterInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  contains?: number | null,
  notContains?: number | null,
  between?: Array< number | null > | null,
};

export type ModelStoryFilterInput = {
  id?: ModelIDFilterInput | null,
  title?: ModelStringFilterInput | null,
  epicStoriesId?: ModelIDFilterInput | null,
  description?: ModelStringFilterInput | null,
  tags?: ModelStringFilterInput | null,
  links?: ModelStringFilterInput | null,
  avgEstimate?: ModelFloatFilterInput | null,
  actualEstimate?: ModelFloatFilterInput | null,
  and?: Array< ModelStoryFilterInput | null > | null,
  or?: Array< ModelStoryFilterInput | null > | null,
  not?: ModelStoryFilterInput | null,
};

export type ModelEstimateFilterInput = {
  id?: ModelIDFilterInput | null,
  user?: ModelStringFilterInput | null,
  estimate?: ModelFloatFilterInput | null,
  and?: Array< ModelEstimateFilterInput | null > | null,
  or?: Array< ModelEstimateFilterInput | null > | null,
  not?: ModelEstimateFilterInput | null,
};

export type CreateEpicMutationVariables = {
  input: CreateEpicInput,
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
        actualEstimate: number | null,
        version: number,
      } | null > | null,
      nextToken: string | null,
    } | null,
    version: number,
  } | null,
};

export type UpdateEpicMutationVariables = {
  input: UpdateEpicInput,
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
        actualEstimate: number | null,
        version: number,
      } | null > | null,
      nextToken: string | null,
    } | null,
    version: number,
  } | null,
};

export type DeleteEpicMutationVariables = {
  input: DeleteEpicInput,
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
        actualEstimate: number | null,
        version: number,
      } | null > | null,
      nextToken: string | null,
    } | null,
    version: number,
  } | null,
};

export type CreateStoryMutationVariables = {
  input: CreateStoryInput,
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
    actualEstimate: number | null,
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
    actualEstimate: number | null,
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
    actualEstimate: number | null,
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
      actualEstimate: number | null,
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
      actualEstimate: number | null,
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
      actualEstimate: number | null,
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
        actualEstimate: number | null,
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
    actualEstimate: number | null,
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
      actualEstimate: number | null,
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
      actualEstimate: number | null,
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
        actualEstimate: number | null,
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
        actualEstimate: number | null,
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
        actualEstimate: number | null,
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
        actualEstimate: number | null,
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
    actualEstimate: number | null,
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
    actualEstimate: number | null,
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
    actualEstimate: number | null,
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
      actualEstimate: number | null,
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
      actualEstimate: number | null,
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
      actualEstimate: number | null,
      estimates:  {
        __typename: "ModelEstimateConnection",
        nextToken: string | null,
      } | null,
      version: number,
    } | null,
    version: number,
  } | null,
};
