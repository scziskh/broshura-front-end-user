import React from 'react';
import styled from 'styled-components';
import Option from './option';
import { constructor } from '../data/constructor';

const Select = props => {
  let currentKeys;
  let options = [];

  constructor.map(constructor => {
    if (constructor[props.typeOptions][props.typeBinding]) {
      return (currentKeys = Object.keys(
        constructor[props.typeOptions][props.typeBinding],
      ));
    }
  });

  if (!currentKeys) {
    return false;
  }

  currentKeys.forEach((option, index) => {
    options.push(
      <Option
        key={index}
        value={option}
        name={constructor.map(constructor => {
          if (
            props.typeOptions === 'paperInner' ||
            props.typeOptions === 'paperCover' ||
            props.typeOptions === 'paperSubstrate'
          ) {
            return constructor.paper.global[option].name;
          } else if (
            props.typeOptions === 'laminationInner' ||
            props.typeOptions === 'laminationCover' ||
            props.typeOptions === 'laminationSubstrate'
          ) {
            return constructor.lamination.global[option].name;
          } else if (
            props.typeOptions === 'printingInner' ||
            props.typeOptions === 'printingCover' ||
            props.typeOptions === 'printingSubstrate'
          ) {
            return constructor.printing.global[option].name;
          } else {
            return constructor[props.typeOptions].global[option].name;
          }
        })}
      />,
    );
  });

  return (
    <Wrapper id={props.typeOptions} className="col-3">
      {options}
    </Wrapper>
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
