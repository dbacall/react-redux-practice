import { ADD, SUBTRACT } from "./types";

export const addToCount = () => dispatch => {
  console.log("in here");
  dispatch({ type: ADD });
};
