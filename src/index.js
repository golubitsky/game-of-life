import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import gameOfLifeApp from './reducers/App';
import App from './components/App';
import './index.css';

// let store = createStore(gameOfLifeApp)
ReactDOM.render(
  <App />,
  document.getElementById('root')
);
