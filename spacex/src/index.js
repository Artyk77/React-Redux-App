import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware, compose } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import { reducer } from './reducers';
import './index.css';
import App from './App';
import "shards-ui/dist/css/shards.min.css";

import * as serviceWorker from './serviceWorker'

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(reducer, composeEnhancers(applyMiddleware(thunk)));

  ReactDOM.render(
    <Provider store= {store}>
      <App />
    </Provider>, document.getElementById('root'));
   
  
  serviceWorker.unregister();
