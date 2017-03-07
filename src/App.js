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

          <Editgoal store={store}/>
          

          <div className="App-content">
            <button onClick={() => store.increment()}>+</button>
            <p className="headline">
              <span className="number" style={{color: store.color}}>{store.count}</span> days of <Goal goal={store.goal} />
            </p>
            <p>
              Last acomplished {store.date}
            </p>
            <button onClick={() => store.decrement()}> - </button>
          </div>
        </div>

    );
  }
}

export default observer(App);
