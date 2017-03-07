import React, { Component} from 'react';
import { observer } from 'mobx-react';

class Goal extends React.Component {

  render() {

    return(
      <span>{this.props.goal}</span>
    );
  }
}
export default observer(Goal);
