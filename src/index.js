import React from 'react';
import ReactDOM from 'react-dom';
import Store from './Store';
import App from './App';
import './index.css';


const s = window.store = new Store()

ReactDOM.render(
  <App store={s}/>,
  document.getElementById('root')
);
