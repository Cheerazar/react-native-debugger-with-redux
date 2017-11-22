import { DECREASE_COUNT, INCREASE_COUNT } from '../actions/types';

const INITIAL_STATE = {
  value: 0,
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case DECREASE_COUNT:
      return {
        ...state,
        value: state.value - 1,
      };
    case INCREASE_COUNT:
      return {
        ...state,
        value: state.value + 1,
      };
    default:
      return state;
  }
};
