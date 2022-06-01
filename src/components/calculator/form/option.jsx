import React from 'react';
import styled from 'styled-components';

const Option = props => {
  return (
    <Wrapper value={props.value} typeOptions="format">
      {props.name}
    </Wrapper>
  );
};

const Wrapper = styled.option``;

export default Option;
