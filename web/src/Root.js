import React from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { BrowserRouter } from 'react-router-dom';

import reducers from 'reducers';

const INITIAL_STATE = {
  auth: { authenticated: localStorage.getItem('token') },
};

export default ({ children, initialState = INITIAL_STATE }) => {
  const store = createStore(reducers, initialState, applyMiddleware(thunk));
  return (
    <Provider store={store}>
      <BrowserRouter>{children}</BrowserRouter>
    </Provider>
  );
};
