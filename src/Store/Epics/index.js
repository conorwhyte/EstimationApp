import { combineEpics } from 'redux-observable';
import { createEpic } from './createEpic.epic';

export const rootEpic = combineEpics(createEpic);
