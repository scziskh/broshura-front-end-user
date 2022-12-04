import React from 'react';
import styled from 'styled-components';
import {
  INPUT_NUMBER,
  INPUT_RADIO,
  SELECT,
} from '../../helpers/builders/.types';
import InputNumber from '../form-items/input.number';
import InputsRadio from '../form-items/inputs.radio';
import Select from '../form-items/select';

const FormGroup = (props) => {
  const keysItems = Object.keys(props.buildGroup);

  const items = keysItems.map((item) => {
    const buildItems = props.buildGroup[item];
    const disable = buildItems.values.length === 1 ? true : false;

    switch (buildItems.type) {
      case SELECT:
        return (
          <Select
            key={item}
            inputName={item}
            buildItems={buildItems}
            disable={disable}
          />
        );
      case INPUT_NUMBER:
        return (
          <InputNumber
            key={item}
            inputName={item}
            name={item} /* name from database in feature */
            values={buildItems.values}
          />
        );
      case INPUT_RADIO:
        return (
          <InputsRadio
            key={item}
            inputName={item}
            buildItems={buildItems}
            disable={disable}
          />
        );
      default:
        return <div key={item}>SOMETHING_WRONG</div>;
    }
  });

  return <Wrapper className="flex">{items}</Wrapper>;
};

const Wrapper = styled.div``;

export default FormGroup;
