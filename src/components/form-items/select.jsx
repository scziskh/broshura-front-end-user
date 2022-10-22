import React from 'react';
import styled from 'styled-components';
import { ConnectForm } from '../api/ConnectForm';
import Option from './option';

const Select = (props) => {
  const keysItems = props.buildItems.values;

  const items = keysItems.map((item) => {
    return (
      <Option
        key={item}
        value={item}
        name={item}
        //Name from database in feature
      />
    );
  });
  return (
    <ConnectForm>
      {({ register }) => (
        <Wrapper
          className="col-3"
          disabled={props.disable}
          {...register(props.inputName)}
        >
          {items}
        </Wrapper>
      )}
    </ConnectForm>
  );
};

const Wrapper = styled.select``;

export default Select;
