import React, { Component} from 'react';
import { observer } from 'mobx-react';
import './App.css';
import Editgoal from './Editgoal';
import Goal from './Goal';

class App extends Component {
  render() {

    const store = this.props.store;

    return (
        <div className="App">


          <div className="App-content">
            <button onClick={() => store.increment()}>+</button>
              <span className="number" style={{color: store.color}}>{store.count}</span>
              <div className="headline">
                days of <Editgoal store={store}/>
              </div>
            <div>
              Last acomplished {store.date}
            </div>
            <button onClick={() => store.decrement()}> - </button>
          </div>
        </div>

    );
  }
}

export default observer(App);
