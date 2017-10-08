import React, { Component } from 'react';
import ReactDom from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { Router, browserHistory } from 'react-router';
import reducers from './reducers';
import promise from 'redux-promise'; 
import { immutableReducer } from 'react-redux-sweetalert';

import App from './components/app';
import  routes  from './routes';

const createStoreWithMiddleware = applyMiddleware(promise)(createStore);


ReactDom.render(
    <Provider store={createStoreWithMiddleware(reducers)}>
      <Router history={browserHistory} routes={routes} />
    </Provider>
    , document.querySelector('.react_container'));



