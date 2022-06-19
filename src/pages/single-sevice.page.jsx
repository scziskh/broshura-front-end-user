import React from 'react';
import styled from 'styled-components';
import { builder } from '../components/calculator/data/builder.form';
import CalculatorForm from '../components/calculator/form';

const SingleServicePage = props => {
  const calculatorForm = builder[props.typeBinding] ? (
    <CalculatorForm typeBinding={props.typeBinding} />
  ) : (
    <Dev>
      <span>No calculator for this service yet</span>
    </Dev>
  );

  return <Wrapper>{calculatorForm}</Wrapper>;
};

const Wrapper = styled.div``;
const Dev = styled.div`
  & {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 50vh;
    span {
      display: block;
      padding: 100px;
      border: 5px dotted var(--black);
      text-transform: uppercase;
      font-weight: bold;
    }
  }
`;

export default SingleServicePage;
