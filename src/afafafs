import React, { Component} from 'react';
import { observer } from 'mobx-react';

class EditGoal extends React.Component {

  constructor(props) {
    super(props);
    this.state = {goal: "coding"};
  }


  render() {
  const goal = this.props.goal;

  return (
    <form onSubmit={goal.handleSubmit}>
      <label>
        Name:
        <input type="text" value={goal.state.value} onChange={() => goal.handleChange()} />
      </label>
      <input type="submit" value="Submit" />
    </form>
    );
  }

}

export default observer(EditGoal);
