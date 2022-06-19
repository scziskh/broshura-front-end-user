import { PUSH_CALC_DATA } from './types';

const intialState = {
  calcData: null,
};

export const calculatorReducer = (state = intialState, action) => {
  switch (action.type) {
    case PUSH_CALC_DATA:
      return {
        ...state,
        calcData: action.data,
      };
    default:
      return state;
  }
};
