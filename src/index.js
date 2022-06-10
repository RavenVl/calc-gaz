import React from 'react';
import ReactDOM from 'react-dom/client';
import {compose, createStore, applyMiddleware} from 'redux'
import {Provider} from 'react-redux'
import thunk from 'redux-thunk'


import './index.css';
import App from './App';
import store from './app/store'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
   <Provider store={store}>
    <App />
  </Provider>
);
