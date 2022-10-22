import React from 'react';

const Option = (props) => {
  return (
    <option value={props.value} disabled={props.disable}>
      {props.name}
    </option>
  );
};

export default Option;
