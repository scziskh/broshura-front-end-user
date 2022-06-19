import React from 'react';
import styled from 'styled-components';
import InputRadio from './input-radio';

// Item buildItems

// value inputName index
const InputsRadio = props => {
  const keysItems = props.buildItems.values;

  const items = keysItems.map((item, index) => {
    return (
      <InputRadio
        key={item}
        value={item}
        name={item} //Name from database in feature
        inputName={props.inputName}
      />
    );
  });
  return <Wrapper className="flex">{items}</Wrapper>;
};

const Wrapper = styled.div`
  & {
    width: 100%;
  }
`;

export default InputsRadio;
