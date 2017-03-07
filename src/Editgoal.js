import React, { Component} from 'react';
import { observer } from 'mobx-react';

class Editgoal extends React.Component {

  handleChange = (event) => {
    this.props.store.goal = event.target.value;
  }

  render() {
    return (
        <label> Name
          <input type="text" value={this.props.store.goal} onChange={this.handleChange}/>
        </label>
    );
  }
}
export default observer(Editgoal);
