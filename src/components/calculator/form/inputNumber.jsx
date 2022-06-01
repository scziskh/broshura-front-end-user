import React from 'react';
import styled from 'styled-components';

const InputNumber = props => {
  return (
    <Wrapper
      type="number"
      id={props.typeOptions}
      placeholder={props.name}
    ></Wrapper>
  );
};

const Wrapper = styled.input``;

export default InputNumber;
