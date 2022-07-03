import React from 'react';
import styled from 'styled-components';
import { ConnectForm } from '../api/ConnectForm';

const InputNumber = props => {
  const inputName = props.inputName;
  const values = props.values;
  return (
    <ConnectForm>
      {({ register, getValues, setValue }) => (
        <Wrapper
          type="number"
          placeholder={props.name}
          {...register(inputName, {
            valueAsNumber: true,
            onChange: () => {
              if (!getValues(inputName) || getValues(inputName) < values.min) {
                setValue(inputName, values.min);
              } else if (getValues(inputName) > values.max) {
                setValue(inputName, values.max);
              }
            },
          })}
        ></Wrapper>
      )}
    </ConnectForm>
  );
};

const Wrapper = styled.input`
  width: 20%;
`;

export default InputNumber;
