import React from 'react';
import styled from 'styled-components';
import { ConnectForm } from '../../../api/ConnectForm';
import Option from './option';

const Select = props => {
  const keysItems = props.buildItems.values;

  const items = keysItems.map(item => {
    return (
      <Option
        key={item}
        value={item}
        name={item} //Name from database in feature
      />
    );
  });
  return (
    <ConnectForm>
      {({ register }) => (
        <Wrapper className="col-3" {...register(props.inputName)}>
          {items}
        </Wrapper>
      )}
    </ConnectForm>
  );
};

const Wrapper = styled.select`
  & {
    cursor: pointer;
    font-size: 14px;
    display: block;
    padding: 7px;
    box-sizing: border-box;
    border: 1px solid var(--black);
    border-radius: 3px;
    &:disabled {
      cursor: default;
      border: 1px solid var(--white);
      color: var(--white);
      background-color: var(--grey);
      font-weight: bold;
    }
  }
`;

export default Select;
