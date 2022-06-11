import React, { useEffect } from 'react';
import styled from 'styled-components';
import Select from './select';
import Inputs from './inputs';
import changeForm from '../helpers/update-form';
import { builder } from '../data/constructor';

const CalculatorForm = props => {
  useEffect(() => {
    if (!currentKeys) {
      return;
    }
    return changeForm(props.typeBinding);
  });
  let currentKeys;
  let components = [];
  builder.map(builder => {
    const build = builder[props.typeBinding];
    if (build) {
      return (currentKeys = Object.keys(builder[props.typeBinding]));
    }
    return false;
  });

  if (!currentKeys) {
    return;
  }

  currentKeys.forEach((element, index) => {
    components.push(buildForm(element, index, props.typeBinding));
  });

  return (
    <section className="wrapper">
      <Wrapper
        id={props.typeBinding}
        onChange={() => changeForm(props.typeBinding)}
      >
        {components}
        <span id="price">-</span>
      </Wrapper>
    </section>
  );
};

const buildForm = (element, index, typeBinding) => {
  switch (element) {
    case 'format':
      return (
        <div key={index}>
          <h3>FORMAT</h3>
          <Group className="flex">
            <Select typeBinding={typeBinding} typeOptions="format" />
          </Group>
        </div>
      );
    case 'orientation':
      return (
        <div key={index}>
          <p>ORIENTATION</p>
          <Group className="flex">
            <Inputs typeBinding={typeBinding} typeOptions="orientation" />
          </Group>
        </div>
      );
    case 'cover':
      return (
        <div key={index}>
          <h3>COVER</h3>
          <Group className="flex">
            <Select typeBinding={typeBinding} typeOptions="paperCover" />
            <Select typeBinding={typeBinding} typeOptions="printingCover" />
            <Select typeBinding={typeBinding} typeOptions="laminationCover" />
          </Group>
        </div>
      );
    case 'substrate':
      return (
        <div key={index}>
          <h3>SUBSTRATE</h3>
          <Group className="flex">
            <Select typeBinding={typeBinding} typeOptions="paperSubstrate" />
            <Select typeBinding={typeBinding} typeOptions="printingSubstrate" />
            <Select
              typeBinding={typeBinding}
              typeOptions="laminationSubstrate"
            />
          </Group>
        </div>
      );
    case 'inner':
      return (
        <div key={index}>
          <h3>INNER</h3>
          <Group className="flex">
            <Select typeBinding={typeBinding} typeOptions="paperInner" />
            <Select typeBinding={typeBinding} typeOptions="printingInner" />
            <Select typeBinding={typeBinding} typeOptions="laminationInner" />
          </Group>
          <p>INNER_PAGES</p>
          <Group className="flex">
            <Inputs typeBinding={typeBinding} typeOptions="pagesCount" />
          </Group>
        </div>
      );
    case 'printingCount':
      return (
        <div key={index}>
          <h3>PRINTING_COUNT</h3>
          <Group className="flex">
            <Inputs typeBinding={typeBinding} typeOptions="printingCount" />
          </Group>
        </div>
      );
    default:
      throw new Error();
  }
};

const Group = styled.div``;
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
