import React from 'react';
import styled from 'styled-components';

const InputNumber = props => {
  return (
    <Wrapper
      type="number"
      className="col-2"
      id={props.typeOptions}
      placeholder={props.name}
    ></Wrapper>
  );
};

const Wrapper = styled.input`
  & {
    width: calc((100% - 120px) / 4);
    box-sizing: border-box;
    padding: 7px;
    text-align: center;
  }
  @media screen and (max-width: 980px) {
    & {
      width: calc(50% - 10px);
    }
  }
`;

export default InputNumber;
