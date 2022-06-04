import React from 'react';
import Select from './select';
import getPrice from '../functions/getPrice';
import styled from 'styled-components';
import Inputs from './inputs';

const CalculatorForm = props => {
  const orientation = () => {
    let curOrientation = document.getElementsByName('orientation');
    for (let i = 0; i < curOrientation.length; i++) {
      if (curOrientation[i].checked) return curOrientation[i].value;
    }
  };

  return (
    <section className="wrapper">
      <Wrapper id={props.typeBinding}>
        <h3>FORMAT</h3>
        <Group className="flex">
          <Select typeBinding={props.typeBinding} typeOptions="format" />
        </Group>
        <p>ORIENTATION</p>
        <Group className="flex">
          <Inputs typeBinding={props.typeBinding} typeOptions="orientation" />
        </Group>
        <h3>COVER</h3>
        <Group className="flex">
          <Select typeBinding={props.typeBinding} typeOptions="paperCover" />
          <Select typeBinding={props.typeBinding} typeOptions="printingCover" />
          <Select
            typeBinding={props.typeBinding}
            typeOptions="laminationCover"
          />
        </Group>
        <h3>INNER</h3>
        <Group className="flex">
          <Select typeBinding={props.typeBinding} typeOptions="paperInner" />
          <Select typeBinding={props.typeBinding} typeOptions="printingInner" />
          <Select
            typeBinding={props.typeBinding}
            typeOptions="laminationInner"
          />
        </Group>
        <p>INNER_PAGES</p>
        <Group className="flex">
          <Inputs typeBinding={props.typeBinding} typeOptions="pagesCount" />
        </Group>
        <h3>PRINTING_COUNT</h3>
        <Group className="flex">
          <Inputs typeBinding={props.typeBinding} typeOptions="printingCount" />
        </Group>

        <button
          type="button"
          onClick={() =>
            getPrice(
              props.typeBinding,
              document.getElementById('pagesCount').value,
              document.getElementById('paperInner').value,
              document.getElementById('printingInner').value,
              document.getElementById('laminationInner').value,
              document.getElementById('paperCover').value,
              document.getElementById('printingCover').value,
              document.getElementById('laminationCover').value,
              document.getElementById('format').value,
              orientation(),
              document.getElementById('printingCount').value,
            )
          }
        >
          Get Price
        </button>
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
  }
`;
const Group = styled.div``;

export default CalculatorForm;
