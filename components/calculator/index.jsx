import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { FormProvider, useForm } from 'react-hook-form';
import { builder, defaultValues } from '../../helpers/builders/calculator';
import FormGroup from './form-group';
import { useGetRequest } from '../../services/get-request';
import {
  CANAL,
  METAL_SPRING,
  PLASTIC_SPRING,
  RING,
  STAPLES,
  THERMOBINDER,
} from '../../helpers/builders/.types';
import StaplesCalculator from '../../helpers/calculator/staples.calculator';
import SpringCalculator from '../../helpers/calculator/spring.calculator';
import ThermobinderCalculator from '../../helpers/calculator/thermobinder.calculator';
import CanalCalculator from '../../helpers/calculator/canal.calculator';
import RingCalculator from '../../helpers/calculator/ring.calculator';

const CalculatorForm = (props) => {
  //calcData from Redux
  //Set default values of form elements and init form
  const methods = useForm({
    mode: 'onChange',
    defaultValues: { ...defaultValues[props.typeBinding] },
  });

  const { data } = useGetRequest('calcData');

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
      setCalculator(() => {
        switch (props.typeBinding) {
          case STAPLES:
            return new StaplesCalculator(data);
          case METAL_SPRING:
            return new SpringCalculator(data);
          case PLASTIC_SPRING:
            return new SpringCalculator(data);
          case THERMOBINDER:
            return new ThermobinderCalculator(data);
          case CANAL:
            return new CanalCalculator(data);
          case RING:
            return new RingCalculator(data);
          default:
            return new Error('typeBinding is not correct');
        }
      });
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
      <p>{group}</p>
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
