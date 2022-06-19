import React, { useState, useEffect, useCallback } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import { FormProvider, useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux/es/exports';
import { builder, defaultValues } from '../data/builder.form';
import Calculator from '../helpers/calculator';
import FormGroup from './form-group';
import { pushCalcData } from '../../../redux/actions';

const CalculatorForm = props => {
  //calcData from Redux
  const dispatch = useDispatch();
  const calcData = useSelector(state => {
    const { calculatorReducer } = state;
    return calculatorReducer.calcData;
  });

  //Set default values of form elements and init form
  const methods = useForm({
    mode: 'onChange',
    defaultValues: { ...defaultValues[props.typeBinding] },
  });

  //state of form elements
  const [formData, setFormData] = useState(() => ({
    ...defaultValues[props.typeBinding],
  }));

  //State of price
  const [price, setPrice] = useState(null);

  //State calculator = Calulator with data
  const [calculator, setCalculator] = useState(null);

  //onChange form
  const handleChange = () => {
    const formValues = methods.getValues();
    setFormData(() => formValues);
  };

  //fetch data of costs with callback
  const initCalculator = useCallback(async () => {
    let data;

    //if no calcData in store response and remember it in store
    if (!calcData) {
      const response = await axios.get(`/db/index.json`);
      dispatch(pushCalcData(response.data));
      data = response.data;
    } else {
      data = calcData;
    }

    //set calculator
    setCalculator(new Calculator(data));

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    initCalculator();
  }, [initCalculator]);

  useEffect(
    () => setPrice(calculator?.getTotalPrice(formData, props.typeBinding)),
    [calculator, formData, props.typeBinding],
  );

  //Building form
  const buildType = builder[props.typeBinding];
  const keysGroups = Object.keys(buildType);
  const groups = keysGroups.map((group, index) => (
    <div key={index}>
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
          <span id="price">{price}</span>
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
    #price {
      display: block;
      padding: 20px 0 12px;
      font-size: 1.1em;
      font-weight: bold;
    }
  }
`;

export default CalculatorForm;
