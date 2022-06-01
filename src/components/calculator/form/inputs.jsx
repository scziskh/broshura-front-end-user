import React from 'react';
import styled from 'styled-components';
import constructor from '../data/constructor';
import InputRadio from './inputRadio';

const Inputs = props => {
  let currentKeys;
  let inputs = [];
  const typeBinding = props.typeBinding;
  const typeOptions = props.typeOptions;

  constructor.map(
    constructor =>
      (currentKeys = Object.keys(constructor[typeOptions][typeBinding])),
  );

  currentKeys.forEach((option, index) => {
    inputs.push(
      <InputRadio
        key={index}
        index={index}
        value={option}
        inputName={props.typeOptions}
        name={constructor.map(
          constructor => constructor[typeOptions].global[option].name,
        )}
      />,
    );
  });
  return <Wrapper>{inputs}</Wrapper>;
};

const Wrapper = styled.div``;

export default Inputs;
