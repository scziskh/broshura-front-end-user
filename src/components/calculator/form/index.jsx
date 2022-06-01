import React from 'react';
import Select from './select';
import getPrice from '../functions/getPrice';

const CalculatorForm = props => (
  <form id={props.typeBinding}>
    <Select id="format" typeBinding={props.typeBinding} typeOptions="format" />
    <button
      type="button"
      onClick={() =>
        getPrice(
          'staples',
          44,
          ['uncoated', 150],
          'twoSidedGrayscale',
          'twoSidedMatte',
          ['uncoated', 300],
          'twoSidedColor',
          'twoSidedMatte',
          'A5',
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
