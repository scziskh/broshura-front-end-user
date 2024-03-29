import React from 'react';
import styled from 'styled-components';
import InputRadio from './input.radio';

const InputsRadio = (props) => {
  const keysItems = props.buildItems.values;

  const items = keysItems.map((item) => {
    return (
      <InputRadio
        key={item}
        value={item}
        name={item} //Name from database in feature
        inputName={props.inputName}
        disable={props.disable}
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
