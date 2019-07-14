import { mergeMap, map } from 'rxjs/operators';
import { ofType } from 'redux-observable';
import { CREATE_EPIC, addEpicId } from '../../Actions';
import { from } from 'rxjs';
import { API, graphqlOperation } from 'aws-amplify';
import { createEpic as createEpicMutation } from '../../graphql/mutations';

const api = {
  putEpic: (query, variables) => {
    const createEpicInput = {
      title: variables.title,
      description: variables.description,
    };
    const request = API.graphql(
      graphqlOperation(query, { input: createEpicInput })
    ).catch(err => err);
    return from(request);
  },
};

export const createEpic = action$ =>
  action$.pipe(
    ofType(CREATE_EPIC),
    mergeMap(action =>
      api
        .putEpic(createEpicMutation, {
          title: action.epicName,
          description: action.description,
        })
        .pipe(map(response => addEpicId(response.data.createEpic.id)))
    )
  );
