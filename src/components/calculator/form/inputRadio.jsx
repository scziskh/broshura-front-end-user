import React from 'react';
import styled from 'styled-components';

const InputRadio = props => {
  return (
    <>
      <input
        type="radio"
        value={props.value}
        id={props.value}
        name={props.inputName}
        defaultChecked={props.index === 0}
      />
      <Wrapper htmlFor={props.value}>{props.name}</Wrapper>
    </>
  );
};

const Wrapper = styled.label``;

export default InputRadio;
