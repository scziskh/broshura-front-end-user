import React from 'react';
import styled from 'styled-components';
import { ConnectForm } from '../api/ConnectForm';

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
  }
  @media screen and (max-width: 980px) {
    & {
      width: calc(50% - 10px);
    }
  }
`;

export default InputRadio;
