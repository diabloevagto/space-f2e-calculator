import { Router } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import React from 'react';
import ReactDOM from 'react-dom';

import { WrapRedux } from 'src/store/redux';
import GlobalStyles from 'src/style/GlobalStyles';
import history from 'src/utils/history';
import theme from 'src/style/theme';

import App from './App';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  <ThemeProvider theme={theme}>
    <Router history={history}>
      <WrapRedux>
        <GlobalStyles />
        <App />
      </WrapRedux>
    </Router>
  </ThemeProvider>,
  document.getElementById('root'),
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
