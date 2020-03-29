import React, { Component } from "react";

const Subtract = ({ onSubtract }) => (
  <button
    onClick={() => {
      onSubtract();
    }}
  >
    -
  </button>
);

export default Subtract;
