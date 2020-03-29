import React, { Component } from "react";
import Add from "./add";
import Subtract from "./subtract";
import { connect } from "react-redux";

class Counter extends Component {
  render() {
    return (
      <React.Fragment>
        <h1>{this.props.count}</h1>
        <Subtract onSubtract={this.handleSubtract} />
        <Add onAdd={this.handleAdd} />
      </React.Fragment>
    );
  }
}

const mapStateToProps = state => ({
  count: state.count.count
});

export default connect(mapStateToProps)(Counter);
