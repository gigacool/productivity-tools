import 'babel-polyfill';
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';

// TODO - update main application original position 
import Application from './containers/Application';

// REDUX Store initialization
import { applyMiddleware, compose, createStore, combineReducers } from 'redux';

function exampleReducer(state={}, action){
  if ('@@INIT' === action.type){
    return {initialized: true};
  }
  return state;
}

const store = createStore(
  combineReducers({example: exampleReducer}),
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

// Finaly, render application
ReactDOM.render((
  <Application
    history={BrowserRouter}
    store={store}
  />),
  document.getElementById('root')
);