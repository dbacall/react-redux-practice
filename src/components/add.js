import React, { Component } from "react";
import { connect } from "react-redux";
import { addToCount } from "../actions/countActions";

class Add extends Component {
  handleAdd = () => {
    this.props.addToCount();
  };

  render() {
    return <button onClick={this.handleAdd}>+</button>;
  }
}

export default connect(null, { addToCount })(Add);
