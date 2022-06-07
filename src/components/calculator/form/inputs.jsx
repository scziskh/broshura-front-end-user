import React from 'react';
import styled from 'styled-components';
import { constructor } from '../data/constructor';
import InputRadio from './input-radio';
import InputNumber from './input-number';

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

    if (!currentKeys) {
      return;
    }

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
  return <Wrapper className="flex">{inputs}</Wrapper>;
};

const Wrapper = styled.div`
  & {
    width: 100%;
  }
`;

export default Inputs;
