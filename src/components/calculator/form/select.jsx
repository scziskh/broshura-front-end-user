import React from 'react';
import styled from 'styled-components';
import Option from './option';
import constructor from '../data/constructor';

const Select = props => {
  let currentKeys;
  let options = [];
  const typeBinding = props.typeBinding;
  const typeOptions = props.typeOptions;

  constructor.map(
    constructor =>
      (currentKeys = Object.keys(constructor[typeOptions][typeBinding])),
  );

  currentKeys.forEach((option, index) => {
    options.push(
      <Option
        key={index}
        value={props.optionType}
        name={constructor.map(
          constructor => constructor[typeOptions][typeBinding][option].name,
        )}
      />,
    );
  });
  return <Wrapper>{options}</Wrapper>;
};

const Wrapper = styled.select``;

export default Select;
