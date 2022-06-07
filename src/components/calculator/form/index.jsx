import React, { useEffect } from 'react';
import Select from './select';
import styled from 'styled-components';
import Inputs from './inputs';
import formChange from '../functions/formChange';
import constructor from '../data/constructor';

const CalculatorForm = props => {
  useEffect(() => formChange(props.typeBinding));
  let currentKeys;
  let components = [];
  let typeBinding = props.typeBinding;

  constructor.map(constructor => {
    return (currentKeys = Object.keys(constructor.construct[typeBinding]));
  });
  //---------BAD ALGORITHM N^2--------- 
  currentKeys.forEach((option, index) => {
    switch (option) {
      case 'format':
        components.push(
          <div key={index}>
            <h3>FORMAT</h3>
            <Group className="flex">
              <Select typeBinding={props.typeBinding} typeOptions="format" />
            </Group>
          </div>,
        );
        break;
      case 'orientation':
        components.push(
          <div key={index}>
            <p>ORIENTATION</p>
            <Group className="flex">
              <Inputs
                typeBinding={props.typeBinding}
                typeOptions="orientation"
              />
            </Group>
          </div>,
        );
        break;
      case 'cover':
        components.push(
          <div key={index}>
            <h3>COVER</h3>
            <Group className="flex">
              <Select
                typeBinding={props.typeBinding}
                typeOptions="paperCover"
              />
              <Select
                typeBinding={props.typeBinding}
                typeOptions="printingCover"
              />
              <Select
                typeBinding={props.typeBinding}
                typeOptions="laminationCover"
              />
            </Group>
          </div>,
        );
        break;
      case 'substrate':
        components.push(
          <div key={index}>
            <h3>SUBSTRATE</h3>
            <Group className="flex">
              <Select
                typeBinding={props.typeBinding}
                typeOptions="paperSubstrate"
              />
              <Select
                typeBinding={props.typeBinding}
                typeOptions="printingSubstrate"
              />
              <Select
                typeBinding={props.typeBinding}
                typeOptions="laminationSubstrate"
              />
            </Group>
          </div>,
        );
        break;
      case 'inner':
        components.push(
          <div key={index}>
            <h3>INNER</h3>
            <Group className="flex">
              <Select
                typeBinding={props.typeBinding}
                typeOptions="paperInner"
              />
              <Select
                typeBinding={props.typeBinding}
                typeOptions="printingInner"
              />
              <Select
                typeBinding={props.typeBinding}
                typeOptions="laminationInner"
              />
            </Group>
            <p>INNER_PAGES</p>
            <Group className="flex">
              <Inputs
                typeBinding={props.typeBinding}
                typeOptions="pagesCount"
              />
            </Group>
          </div>,
        );
        break;
      case 'printingCount':
        components.push(
          <div key={index}>
            <h3>PRINTING_COUNT</h3>
            <Group className="flex">
              <Inputs
                typeBinding={props.typeBinding}
                typeOptions="printingCount"
              />
            </Group>
          </div>
        );
        break;
    }
  });
  return (
    <section className="wrapper">
      <Wrapper
        id={props.typeBinding}
        onChange={() => formChange(props.typeBinding)}
      >
        {components}
        <span id="price">-</span>
      </Wrapper>
    </section>
  );
};

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
const Group = styled.div``;

export default CalculatorForm;
