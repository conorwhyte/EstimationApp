import retry from 'async-retry'
import { API, graphqlOperation } from 'aws-amplify'
import { QNewEpic, ListEpicStories } from './ApiActions'
import 'babel-polyfill'

export async function createNewEpic(title) {
  const resp = await GqlRetry(QNewEpic, { title: title })

  // Create the epic
  return resp.data.createEpic.id
}

export async function listEpicStories(epicID) {
  const { data } = await API.graphql(
    graphqlOperation(ListEpicStories, { epicID })
  )
  return data
}

const GqlRetry = async (query, variables) => {
  return await retry(
    async bail => {
      // console.log('Sending GraphQL operation', {query: query, vars: variables});
      const response = await API.graphql(graphqlOperation(query, variables))
      // console.log('GraphQL result', {result: response, query: query, vars: variables})
      return response
    },
    {
      retries: 3,
    }
  )
}
