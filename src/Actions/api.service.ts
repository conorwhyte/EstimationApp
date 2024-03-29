// import retry from 'async-retry'
import { API, graphqlOperation } from 'aws-amplify'
import { ListEpicStories, ListStoriesEstimates } from './ApiActions'
import { createStory, deleteEpic, createEstimate, updateStory } from '../graphql/mutations'
import { getEpic, listEpics } from '../graphql/queries';
import { CreateStoryInput, DeleteEpicInput, UpdateStoryInput, CreateEstimateInput } from '../API';
import 'babel-polyfill'

export async function createStoryForEpic(epicId: string, title: string) {
  const createStoryInput: CreateStoryInput = {
    title: title,
    epicStoriesId: epicId,
  };
  const resp = await GqlRetry(createStory, {input: createStoryInput});
  
  // return resp.data;
  return resp;
}

export async function addEstimateForStory(storyId: string, estimate: any, user: any) {
  const createEstimateInput: CreateEstimateInput = {
    estimate,
    estimateStoryId: storyId,
    user,
  };
  const resp = await GqlRetry(createEstimate, {input: createEstimateInput});
  
  // return resp.data;
  return resp;
}

export async function listEpicsForUser() {
  return await API.graphql(graphqlOperation(listEpics));
}

export async function deleteEpicForUser(id: string) {
  const deleteEpicInput: DeleteEpicInput = {
    id: id,
    expectedVersion: 1,
  };
  return await API.graphql(graphqlOperation(deleteEpic, {input: deleteEpicInput} ));
}

export async function getEpicForId(epicId: string) {
  return await API.graphql(graphqlOperation(getEpic, {id: epicId}));
}

export async function listEpicStories(epicID: string) {
  return await API.graphql(graphqlOperation(ListEpicStories, { epicID: epicID }))
}

export async function listStoriesEstimate(storyId: string) {
  return await API.graphql(graphqlOperation(ListStoriesEstimates, { epicStoriesId: storyId}));
}

export async function completeStory(storyData: any, storyWAG: any) {
  const updateStoryInput: UpdateStoryInput = {
    id: storyData.storyId,
    // actualEstimate: storyWAG,
    expectedVersion: storyData.version,
  };
  
  return await GqlRetry(updateStory, {input: updateStoryInput});
}

const GqlRetry = async (query: any, variables: any) => {
  console.log('Sending GraphQL operation', {query: query, vars: variables});
  const response = await API.graphql(graphqlOperation(query, variables))
  console.log('GraphQL result', {result: response, query: query, vars: variables})
  return response
  // return await retry(
  //   async bail => {
  //     console.log('Sending GraphQL operation', {query: query, vars: variables});
  //     const response = await API.graphql(graphqlOperation(query, variables))
  //     console.log('GraphQL result', {result: response, query: query, vars: variables})
  //     return response
  //   }, {
  //     retries: 3,
  //   }
  // )
}
