import React, { Component } from 'react';
import { observer } from 'mobx-react'
import DevTools from 'mobx-react-devtools';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    const counter = this.props.counter;
    return (
      <div className="App">
        <p className="App-intro">
          Did you practice coding today?
        </p>
        <p>
        <button onClick={() => counter.increment()}> Yes </button>
        <button onClick={() => counter.decrement()}> nvm </button>
        </p>
        <p>
          You've coded for
          <span> {counter.count} </span>
          days this year.
        </p>
        <DevTools />
      </div>
    );
  }
}

export default observer(App);
