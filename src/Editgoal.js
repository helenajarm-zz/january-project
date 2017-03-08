import React, { Component} from 'react';
import { observer } from 'mobx-react';

class Editgoal extends React.Component {


  handleChange = (event) => {
    this.props.store.goal = event.target.value;
    localStorage.setItem('goal',this.props.store.goal);
  }

  render() {
    return (
      <input type="text" value={this.props.store.goal} onChange={this.handleChange} onKeyPress="this.style.width = ((this.value.length + 1) * 8) + 'px';"/>
    );
  }
}
export default observer(Editgoal);
