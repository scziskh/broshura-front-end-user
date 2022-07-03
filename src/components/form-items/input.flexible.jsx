import styled from 'styled-components';
import { ConnectForm } from '../api/ConnectForm';

const InputFlexible = props => (
  <ConnectForm>
    {({ register }) => (
      <Wrapper
        type={props.type}
        placeholder={props.placeholder}
        {...register(props.inputName)}
      />
    )}
  </ConnectForm>
);

const Wrapper = styled.input``;

export default InputFlexible;
