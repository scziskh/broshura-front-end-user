import React from 'react';
import styled from 'styled-components'; 
import Option from './option';
import formats from '../data/formats';

const Select = props => {
  let curFormats = [];
  let Options = [];
  const typeBinding = props.typeBinding;

  formats.map(formats => (curFormats = Object.keys(formats[typeBinding])));

  curFormats.forEach((format, index) => {
    Options.push(
      <Option
        key={index}
        value={format}
        name={formats.map(formats => formats[typeBinding][format].name)}
      />,
    );
  });
  return <Wrapper>{Options}</Wrapper>;
};

const Wrapper = styled.select``;

export default Select;
