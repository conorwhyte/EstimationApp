import retry from 'async-retry'
import { API, graphqlOperation } from 'aws-amplify'
import { QNewEpic, ListEpicStories, QNewStory, ListEpics } from './ApiActions'
import { createStory } from '../graphql/mutations'
import { getEpic, listEpics } from '../graphql/queries';
import { CreateStoryInput } from '../API';
import 'babel-polyfill'

export async function createStoryForQuiz(epicId, title) {
  const createStoryInput: CreateStoryInput = {
    title: title,
    epicStoriesId: epicId,
  };
  const resp = await GqlRetry(createStory, {input: createStoryInput});
  
  return resp.data;
}

export async function listEpicsForUser() {
  return await API.graphql(graphqlOperation(listEpics));
}

export async function getEpicForId(epicId) {
  const resp = await API.graphql(graphqlOperation(getEpic, {id: epicId}));

  return resp;
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
