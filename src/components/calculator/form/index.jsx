import React from 'react';
import Select from './select';
import getPrice from '../functions/getPrice';
import styled from 'styled-components';

const CalculatorForm = props => {
  return (
    <Wrapper id={props.typeBinding}>
      <Select typeBinding={props.typeBinding} typeOptions="format" />
      <button
        type="button"
        onClick={() =>
          getPrice(
            props.typeBinding,
            44,
            ['uncoated', 150],
            'twoSidedGrayscale',
            'twoSidedMatte',
            ['uncoated', 300],
            'twoSidedColor',
            'twoSidedMatte',
            document.getElementById('format').value,
            'portrait',
            1,
          )
        }
      >
        Test
      </button>
    </Wrapper>
  );
};

const Wrapper = styled.form``;

export default CalculatorForm;
