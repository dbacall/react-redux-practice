import React, { Component } from "react";

const Add = ({ onAdd }) => (
  <button
    onClick={() => {
      onAdd();
    }}
  >
    +
  </button>
);

export default Add;
