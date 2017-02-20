import React, { Component } from 'react';
import { observer } from 'mobx-react'
import DevTools from 'mobx-react-devtools';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {

    var moment = require('moment');
    /*var now = moment().format();*/
    const counter = this.props.counter;

    return (
        <div className="App">
          <div className="App-content">
            <button onClick={() => counter.increment()}>+</button>
            <p className="headline">
              <span className="number" style={{color: counter.color}}>{counter.count}</span> days of coding
            </p>
            <p>
              Last acomplished {counter.date}
            </p>
            <button onClick={() => counter.decrement()}> - </button>
          </div>
        </div>
    );
  }
}

export default observer(App);
