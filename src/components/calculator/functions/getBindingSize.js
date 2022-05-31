import CalculatorData from '../CalculatorData/index.json';

const getBindingSize = (thickness, bindingType) => {
  let size = 1;
  while (CalculatorData.bindingType[bindingType][size]) {
    if (thickness > CalculatorData.bindingType[bindingType][size].thickness) {
      size++;
    } else {
      return size;
    }
  }
  return -1;
};

export default getBindingSize;
