import React from 'react';
import styled from 'styled-components';
import CalculatorForm from '../components/calculator/form';

const SingleServicePage = props => {
  return (
    <Wrapper>
      <CalculatorForm typeBinding={props.typeBinding} />
    </Wrapper>
  );
};

const Wrapper = styled.section``;

export default SingleServicePage;
