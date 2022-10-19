import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { FormProvider, useForm } from 'react-hook-form';
import { builder, defaultValues } from '../../helpers/builders/calculator';
import FormGroup from './form-group';
import { useGetCalcDataQuery } from '../../../redux/calculatorAPI';
import {
  CANAL,
  METAL_SPRING,
  PLASTIC_SPRING,
  STAPLES,
  THERMOBINDER,
} from '../../helpers/builders/.types';
import StaplesCalculator from '../helpers/staples.calculator';
import SpringCalculator from '../helpers/spring.calculator';
import ThermobinderCalculator from '../helpers/thermobinder.calculator';
import CanalCalculator from '../helpers/canal.calculator';

const CalculatorForm = (props) => {
  //calcData from Redux
  //Set default values of form elements and init form
  const methods = useForm({
    mode: 'onChange',
    defaultValues: { ...defaultValues[props.typeBinding] },
  });

  const { data } = useGetCalcDataQuery();

  //state of form elements
  const [formData, setFormData] = useState(() => ({
    ...defaultValues[props.typeBinding],
  }));

  //State of price
  const [price, setPrice] = useState(null);

  //State calculator = Calculator with data
  const [calculator, setCalculator] = useState(null);

  //onChange form
  const handleChange = () => {
    const formValues = methods.getValues();
    setFormData(() => formValues);
  };

  useEffect(() => {
    if (data) {
      switch (props.typeBinding) {
        case STAPLES:
          setCalculator(new StaplesCalculator(data));
          break;
        case METAL_SPRING:
          setCalculator(new SpringCalculator(data));
          break;
        case PLASTIC_SPRING:
          setCalculator(new SpringCalculator(data));
          break;
        case THERMOBINDER:
          setCalculator(new ThermobinderCalculator(data));
          break;
        case CANAL:
          setCalculator(new CanalCalculator(data));
          break;
        default:
      }
    }
  }, [data]);

  useEffect(() => {
    setPrice(calculator?.getTotalPrice(formData, props.typeBinding));
  }, [calculator, formData, props.typeBinding]);

  //Building form
  const buildType = builder[props.typeBinding];
  const keysGroups = Object.keys(buildType);
  const groups = keysGroups.map((group) => (
    <div key={group}>
      <p>Header</p>
      <FormGroup
        group={group}
        buildGroup={buildType[group]}
        typeBinding={props.typeBinding}
      />
    </div>
  ));

  //Render
  return (
    <section className="wrapper">
      <FormProvider {...methods}>
        <Wrapper id={props.typeBinding} onChange={handleChange}>
          {groups}
          <span>{isNaN(price) ? `${price}` : `${price?.toFixed(2)} UAH`}</span>
        </Wrapper>
      </FormProvider>
    </section>
  );
};

//styles
const Wrapper = styled.form`
  & {
    width: 100%;
    max-width: 980px;
    h3 {
      padding: 12px 0 7px;
    }
    p {
      padding: 12px 0 7px;
    }
    span {
      display: block;
      padding: 20px 0 12px;
      font-size: 1.1em;
      font-weight: bold;
    }
  }
`;

export default CalculatorForm;
