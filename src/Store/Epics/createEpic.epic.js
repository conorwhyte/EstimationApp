import { tap, mergeMap, map, mapTo } from 'rxjs/operators';
import { ofType } from 'redux-observable';
import { QNewEpic } from '../../Actions/ApiActions'
import {
  ADD_EPIC_ID,
} from '../../Actions/epic.action'
import { from } from 'rxjs'
import { API, graphqlOperation } from 'aws-amplify'

const api = {
  putEpic: (query, variables) => {
    const request = API.graphql(graphqlOperation(query, variables))
      .catch(err => err);

    return from(request);
  }
};

export const createEpic = (action$, state$) => action$.pipe(
    ofType(ADD_EPIC_ID),
    mergeMap(action =>
      api.putEpic(QNewEpic, { title: 'Conor' }).pipe(
          map(response => console.log(response.data.createEpic.id)),
          mapTo({ type: 'PONG' }),
          // tap(() => this.props.history.push(`/estimation?id=${epicId}`))
        )
      )
);
