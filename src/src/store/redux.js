import { Provider } from 'react-redux';
import { applyMiddleware, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension/developmentOnly';
import React from 'react';

import modules from './modules';

const configureStore = () => {
  const store = createStore(
    modules.rootReducer,
    composeWithDevTools(applyMiddleware()),
  );

  return store;
};

const store = configureStore();

const WrapRedux = (props) => {
  return <Provider store={store}>{props.children}</Provider>;
};

export { WrapRedux };
