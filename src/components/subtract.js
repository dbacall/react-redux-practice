import React, { Component } from "react";
import { connect } from "react-redux";
import { subtractFromCount } from "../actions/countActions";

class Subtract extends Component {
  handleSubtract = () => {
    this.props.subtractFromCount();
  };

  render() {
    return <button onClick={this.handleSubtract}>-</button>;
  }
}

export default connect(null, { subtractFromCount })(Subtract);
