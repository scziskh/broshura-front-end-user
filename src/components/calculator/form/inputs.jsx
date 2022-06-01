import React from 'react';
import styled from 'styled-components';
import constructor from '../data/constructor';
import InputRadio from './inputRadio';
import InputNumber from './inputNumber';

const Inputs = props => {
  let currentKeys;
  let inputs = [];
  const typeBinding = props.typeBinding;
  const typeOptions = props.typeOptions;

  if (typeOptions === 'orientation') {
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
          inputName={typeOptions}
          name={constructor.map(
            constructor => constructor[typeOptions].global[option].name,
          )}
        />,
      );
    });
  } else if (typeOptions === 'pagesCount' || typeOptions === 'printingCount') {
    inputs.push(
      <InputNumber
        key="0"
        typeOptions={typeOptions}
        name={constructor.map(
          constructor => constructor[typeOptions].global.name,
        )}
      />,
    );
  }
  return <Wrapper>{inputs}</Wrapper>;
};

const Wrapper = styled.div``;

export default Inputs;
