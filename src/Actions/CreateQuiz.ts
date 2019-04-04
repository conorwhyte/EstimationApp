import retry from 'async-retry'
import { API, graphqlOperation } from 'aws-amplify'
import { QNewEpic, ListEpicStories, QNewStory, ListEpics } from './ApiActions'

import { createStory } from '../graphql/mutations'

import { CreateStoryInput } from '../API';

import 'babel-polyfill'

export async function createNewEpic(title) {
  const resp = await GqlRetry(QNewEpic, { title: title })

  // Create the epic
  return resp.data.createEpic.id
}

export async function createStoryForQuiz(epicId, title) {
  // console.log({epicId, title});
  // const resp = await GqlRetry(QNewStory, { title: title, epicId: epicId });
  
  // // Create the story
  // return resp.data;

  console.log({epicId, title});
  const createStoryInput = {
    epicId,
    title,
  };
  const resp = await GqlRetry(QNewStory, createStoryInput);
  
  // Create the story
  return resp.data;
}

export async function listEpics() {
  // const { data } = await API.graphql(graphqlOperation(ListEpics))

  // return data;
}

export async function listEpicStories(epicID) {
  return await API.graphql(graphqlOperation(ListEpicStories, { epicID: epicID }))
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
