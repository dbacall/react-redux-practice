import { ADD, SUBTRACT } from "../actions/types";

const initialState = { count: 0 };

export default function(state = initialState, action) {
  switch (action.type) {
    case ADD:
      state.count++;
      return {
        ...state,
        count: state.count
      };

    default:
      return state;
  }
}
