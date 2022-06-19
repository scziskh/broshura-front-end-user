import { PUSH_CALC_DATA } from './types';

export const pushCalcData = data => {
  return {
    type: PUSH_CALC_DATA,
    data: data,
  };
};
