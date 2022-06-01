import React from 'react';
import Select from './select';
import getPrice from '../functions/getPrice';
import styled from 'styled-components';
import Inputs from './inputs';

const CalculatorForm = props => {
  const orientation = () => {
    let curOrientation = document.getElementsByName('orientation');
    for (let i = 0; i < curOrientation.length; i++) {
      if (curOrientation[i].checked) return curOrientation[i].value;
    }
  };
  return (
    <Wrapper id={props.typeBinding}>
      <Select typeBinding={props.typeBinding} typeOptions="format" />
      <Inputs typeBinding={props.typeBinding} typeOptions="orientation" />
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
            orientation(),
            100,
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
