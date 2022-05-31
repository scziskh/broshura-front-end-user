import React from 'react';
import Select from './select';
import getPrice from '../functions/getPrice';

const CalculatorForm = props => (
  <form id={props.typeBinding}>
    <Select id="format" typeBinding={props.typeBinding} />
    <button
      type="button"
      onClick={() =>
        getPrice(
          'staples',
          44,
          ['uncoated', 1],
          'twoSidedGrayscale',
          'twoSidedMatte',
          ['uncoated', 5],
          'twoSidedColor',
          'twoSidedMatte',
          3,
          'portrait',
          1,
        )
      }
    >
      Test
    </button>
  </form>
);

export default CalculatorForm;
