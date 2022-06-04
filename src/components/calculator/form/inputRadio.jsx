import React from 'react';
import styled from 'styled-components';

const InputRadio = props => {
  return (
    <Wrapper>
      <input
        type="radio"
        value={props.value}
        id={props.value}
        name={props.inputName}
        defaultChecked={props.index === 0}
      />
      <label htmlFor={props.value}>{props.name}</label>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  & {
    width: calc((100% - 120px) / 4);
    input {
      display: none;
      &:checked ~ label {
        background: var(--black);
        color: white;
        font-weight: bold;
      }
    }
    label {
      cursor: pointer;
      font-size: 14px;
      width: 100%;
      display: block;
      padding: 7px;
      box-sizing: border-box;
      border: 1px solid var(--black);
      border-radius: 3px;
      overflow: hidden;
      text-align: center;
    }
  }
  @media screen and (max-width: 980px) {
    & {
      width: calc(50% - 10px);
    }
  }
`;

export default InputRadio;
