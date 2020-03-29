import { ADD, SUBTRACT } from "./types";

export const addToCount = () => dispatch => {
  dispatch({ type: ADD });
};

export const subtractFromCount = () => dispatch => {
  dispatch({ type: SUBTRACT });
};
