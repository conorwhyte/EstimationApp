import retry from 'async-retry'
import { API, graphqlOperation } from 'aws-amplify'
import { ListEpicStories, QNewStory, ListEpics, ListStoriesEstimates } from './ApiActions'
import { createStory, deleteEpic, createEstimate, updateStory } from '../graphql/mutations'
import { getEpic, listEpics, listEstimates } from '../graphql/queries';
import { CreateStoryInput, DeleteEpicInput, ModelEstimateFilterInput, UpdateStoryInput } from '../API';
import 'babel-polyfill'

export async function createStoryForQuiz(epicId, title) {
  const createStoryInput: CreateStoryInput = {
    title: title,
    epicStoriesId: epicId,
  };
  const resp = await GqlRetry(createStory, {input: createStoryInput});
  
  return resp.data;
}

export async function addEstimateForStory(storyId, estimate, user) {
  const createEstimateInput: CreateEstimateInput = {
    estimate,
    estimateStoryId: storyId,
    user,
  };
  const resp = await GqlRetry(createEstimate, {input: createEstimateInput});
  
  return resp.data;
}

export async function listEpicsForUser() {
  return await API.graphql(graphqlOperation(listEpics));
}

export async function deleteEpicForUser(id) {
  const deleteEpicInput: DeleteEpicInput = {
    id: id,
    expectedVersion: 1,
  };
  return await API.graphql(graphqlOperation(deleteEpic, {input: deleteEpicInput} ));
}

export async function getEpicForId(epicId) {
  return await API.graphql(graphqlOperation(getEpic, {id: epicId}));
}

export async function listEpicStories(epicID) {
  return await API.graphql(graphqlOperation(ListEpicStories, { epicID: epicID }))
}

export async function listStoriesEstimate(storyId) {
  return await API.graphql(graphqlOperation(ListStoriesEstimates, { epicStoriesId: storyId}));
}

export async function completeStory(storyData, storyWAG) {
  const updateStoryInput: UpdateStoryInput = {
    id: storyData.storyId,
    actualEstimate: storyWAG,
    expectedVersion: storyData.version,
  };
  
  return await GqlRetry(updateStory, {input: updateStoryInput});
}

const GqlRetry = async (query, variables) => {
  return await retry(
    async bail => {
      console.log('Sending GraphQL operation', {query: query, vars: variables});
      const response = await API.graphql(graphqlOperation(query, variables))
      console.log('GraphQL result', {result: response, query: query, vars: variables})
      return response
    },
    {
      retries: 3,
    }
  )
}
