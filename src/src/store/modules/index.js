import { combineReducers } from 'redux';

import calculator from './calculator';

export default {
  rootReducer: combineReducers({
    calculator: calculator.reducer,
  }),
};
