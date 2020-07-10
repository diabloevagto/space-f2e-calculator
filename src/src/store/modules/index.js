import { combineEpics } from 'redux-observable';
import { combineReducers } from 'redux';

export default {
  rootEpic: combineEpics(...Object.values({})),
  rootReducer: combineReducers({}),
};
