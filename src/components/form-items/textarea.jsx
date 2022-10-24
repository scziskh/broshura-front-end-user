import styled from 'styled-components';
import { ConnectForm } from '../api/ConnectForm';

const TextArea = (props) => {
  return (
    <ConnectForm>
      {({ register }) => (
        <Wrapper
          placeholder={props.placeholder}
          {...register(props.inputName)}
        />
      )}
    </ConnectForm>
  );
};

const Wrapper = styled.textarea`
  max-width: 100%;
  resize: vertical;
`;

export default TextArea;
