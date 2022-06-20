import React from 'react';
import styled from 'styled-components';
import { ConnectForm } from '../../helpers/connect.form';

const InputNumber = props => {
  const inputName = props.inputName;
  const values = props.values;
  return (
    <ConnectForm>
      {({ register, getValues, setValue }) => (
        <>
          <Wrapper
            type="number"
            className="col-2"
            placeholder={props.name}
            {...register(inputName, {
              valueAsNumber: true,
              onChange: () => {
                if (
                  !getValues(inputName) ||
                  getValues(inputName) < values.min
                ) {
                  setValue(inputName, values.min);
                } else if (getValues(inputName) > values.max) {
                  setValue(inputName, values.max);
                }
              },
            })}
          ></Wrapper>
        </>
      )}
    </ConnectForm>
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
