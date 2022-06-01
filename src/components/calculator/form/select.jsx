import React from 'react';
import styled from 'styled-components';
import Option from './option';
import constructor from '../data/constructor';

const Select = props => {
  let currentKeys;
  let options = [];
  let typeBinding = props.typeBinding;
  let typeOptions = props.typeOptions;

  constructor.map(
    constructor =>
      (currentKeys = Object.keys(constructor[typeOptions][typeBinding])),
  );

  currentKeys.forEach((option, index) => {
    options.push(
      <Option
        key={index}
        value={option}
        name={constructor.map(
          constructor => constructor[typeOptions].global[option].name,
        )}
      />,
    );
  });
  return <Wrapper id={typeOptions}>{options}</Wrapper>;
};

const Wrapper = styled.select``;

export default Select;
