import React, { Component } from 'react';
import { observer } from 'mobx-react'
import DevTools from 'mobx-react-devtools';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    const {counter} = this.props;
    return (
      <div className="App">
        <p className="App-intro">
          Did you practice coding today?
        </p>
        <p>
        <button onClick={() => counter.increment()}> Yes </button>
        <button onClick={() => counter.decrement()}> - </button>
        </p>
        <p>
          Days you've done it:
          <span className={counter.isOdd ? 'Counter-odd' : 'Counter-even'}> {counter.count} </span>
        </p>
        <DevTools />
      </div>
    );
  }
}

export default observer(App);
