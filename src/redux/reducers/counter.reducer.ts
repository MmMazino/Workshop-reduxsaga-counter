import { INCREMENT, DECREMENT, ADD } from "../actionType";

interface Action {
  type: string;
  payload?: number; // Adjust the type according to your application's needs
}

const initialState = {
  count: 0,
};

export default (state = initialState, { type, payload }: Action) => {
  switch (type) {
    case INCREMENT:
      return { ...state, count: state.count + 1 };
    case DECREMENT:
      return { ...state, count: state.count - 1 };
    case ADD:
      return {
        ...state,
        count: state.count + (payload !== undefined ? payload : 0),
      };

    default:
      return state;
  }
};
