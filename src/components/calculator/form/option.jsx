import React from 'react';
import styled from 'styled-components';

const Option = props => {
  return <Wrapper value={props.value}>{props.name}</Wrapper>;
};

const Wrapper = styled.option`
  padding: 10px;
`;

export default Option;
