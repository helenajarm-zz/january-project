import React from 'react';
import ReactDOM from 'react-dom';
import Counter from './Counter';
import App from './App';
import './index.css';


const c = window.counter = new Counter()

ReactDOM.render(
  <App counter={c} />,
  document.getElementById('root')
);
