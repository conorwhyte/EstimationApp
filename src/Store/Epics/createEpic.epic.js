import { mergeMap, map, tap } from 'rxjs/operators';
import { ofType } from 'redux-observable';
import { QNewEpic } from '../../Actions/ApiActions';
import { CREATE_EPIC } from '../../Actions/epic.action';
import { addEpicId } from '../../Actions/epic.action';
import { from } from 'rxjs';
import { API, graphqlOperation } from 'aws-amplify';

const api = {
  putEpic: (query, variables) => {
    const request = API.graphql(graphqlOperation(query, variables)).catch(
      err => err
    );

    return from(request);
  },
};

export const createEpic = (action$) =>
  action$.pipe(
    ofType(CREATE_EPIC),
    mergeMap(action =>
      api
        .putEpic(QNewEpic, { title: action.epicName })
        .pipe(map(response => addEpicId(response.data.createEpic.id)))
    )
  );
