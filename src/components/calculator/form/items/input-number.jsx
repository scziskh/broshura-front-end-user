import React from 'react';
import styled from 'styled-components';
import { ConnectForm } from '../../helpers/connect.form';

const InputNumber = props => {
  return (
    <ConnectForm>
      {({ register, formState: { errors } }) => (
        <>
          <Wrapper
            type="number"
            className="col-2"
            placeholder={props.name}
            {...register(props.inputName, {
              required: <p>this is required</p>,
              valueAsNumber: true,
              min: {
                value: 1,
                message: <p>error message</p>,
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
