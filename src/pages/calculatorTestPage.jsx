import React from 'react';
import styled from 'styled-components';
import CalculatorForm from '../components/calculator/form';
import getPrice from '../components/calculator/functions/getPrice';

const CalculatorTestPage = () => (
  <Wrapper>
    <CalculatorForm typeBinding="staples" />
  </Wrapper>
);

const Wrapper = styled.section``;

export default CalculatorTestPage;
