import React from 'react';
import styled from 'styled-components';
import { ConnectForm } from '../../helpers/connect.form';

const InputRadio = props => {
  return (
    <ConnectForm>
      {({ register, setValue }) => (
        <Wrapper>
          <input
            type="radio"
            id={props.value}
            {...register(props.inputName, {
              onBlur: e => {
                setValue(e.target.name, e.target.value);
              },
            })}
            value={props.value}
          />
          <label htmlFor={props.value}>{props.name}</label>
        </Wrapper>
      )}
    </ConnectForm>
  );
};

const Wrapper = styled.div`
  & {
    width: calc((100% - 120px) / 4);
    input {
      display: none;
      &:disabled ~ label {
        cursor: default;
        color: var(--white);
        background-color: var(--grey);
        border: 1px solid var(--white);
        font-weight: bold;
      }
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
