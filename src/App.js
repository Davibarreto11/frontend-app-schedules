import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';

import history from './services/history';
import Routes from './routes';

import store from './store';

import GlobalStyle from './styles/global';

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter history={history}>
        <Routes />
        <GlobalStyle />
      </BrowserRouter>
    </Provider>
  );
}

export default App;
