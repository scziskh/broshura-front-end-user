import React from 'react';
import styled from 'styled-components';
import CalculatorForm from '../components/calculator/form';

const CalculatorTestPage = () => (
  <Wrapper>
    <CalculatorForm typeBinding="staples" />
  </Wrapper>
);

const Wrapper = styled.section``;

export default CalculatorTestPage;
