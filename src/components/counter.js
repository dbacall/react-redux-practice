import React, { Component } from "react";
import Add from "./add";
import Subtract from "./subtract";

class Counter extends Component {
  constructor(props) {
    super(props);
    this.state = { count: 0 };
  }

  handleAdd = () => {
    this.state.count++;
    this.setState({ count: this.state.count++ });
    console.log(this.state.count);
  };

  handleSubtract = () => {
    this.state.count--;
    this.setState({ count: this.state.count-- });
  };

  render() {
    return (
      <React.Fragment>
        <h1>{this.state.count}</h1>
        <Subtract onSubtract={this.handleSubtract} />
        <Add onAdd={this.handleAdd} />
      </React.Fragment>
    );
  }
}

export default Counter;
