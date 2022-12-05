import { FormProvider, useForm } from 'react-hook-form';
import styled from 'styled-components';
import ButtonDefault from '../../form-items/button.default';
import InputFlexible from '../../form-items/input.flexible';
import TextArea from '../../form-items/textarea';

const Form = (props) => {
  const methods = useForm({
    mode: 'onSubmit',
  });
  const { text } = props;
  return (
    <Wrapper className="col-2">
      <h3>{text?.contact_us_header}</h3>
      <FormProvider {...methods}>
        <form>
          <InputFlexible
            type="text"
            placeholder={text?.name_form}
            inputName="name"
          />
          <InputFlexible
            type="email"
            placeholder={text?.email_form}
            inputName="email"
          />
          <TextArea placeholder={text?.message_form} inputName="message" />
          <InputFlexible type="file" inputName="files" />
          <ButtonDefault type={'submit'} text={text?.button_form} />
        </form>
      </FormProvider>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  padding-bottom: 64px;
  gap: 40px;
  flex-wrap: wrap;
  textarea,
  input {
    width: 100%;
    margin: 0 0 24px;
    font-size: 1em;
  }
  textarea {
    height: 200px;
  }
  h3 {
    margin-bottom: 14px;
  }
`;

export default Form;
