import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';
import {createStore,combineReducers} from 'redux'
import App from './App'
import allReducers from './Reducers/redInd'
import {Provider} from 'react-redux'//connects our global store to our entire app

const store=createStore(allReducers)
ReactDOM.render(
  <Provider store={store}>
    <App/> 
    {/* our app can access everything in the store */}
  </Provider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
