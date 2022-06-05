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
        name={constructor.map(constructor => {
          if (typeOptions === 'paperInner' || typeOptions === 'paperCover') {
            return constructor.paper.global[option].name;
          } else if (
            typeOptions === 'laminationInner' ||
            typeOptions === 'laminationCover'
          ) {
            return constructor.lamination.global[option].name;
          } else if (
            typeOptions === 'printingInner' ||
            typeOptions === 'printingCover'
          ) {
            return constructor.printing.global[option].name;
          } else {
            return constructor[typeOptions].global[option].name;
          }
        })}
      />,
    );
  });
  return (
    <Wrapper id={typeOptions} className="col-3">
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
