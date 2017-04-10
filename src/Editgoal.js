import React, { Component} from 'react';
import { observer } from 'mobx-react';

class Editgoal extends React.Component {


  handleChange = (event) => {
    this.props.store.goal = event.target.value;
    localStorage.setItem('goal',this.props.store.goal);
  }


  render() {
    return (
    <div className="editModal">
      <div className="modalContent">
        <h3>One habit, once a day.</h3>
        <p>What's your habit?</p>
        <input type="text" value={this.props.store.goal} onChange={this.handleChange}/>
        <button className="saveButton" onClick={this.props.store.toggleModal}>Track it</button>
      </div>
    </div>

    );
  }
}
export default observer(Editgoal);
