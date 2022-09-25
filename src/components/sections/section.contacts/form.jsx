import { FormProvider, useForm } from 'react-hook-form';
import styled from 'styled-components';
import ButtonDefault from '../../form-items/button.default';
import InputFlexible from '../../form-items/input.flexible';
import TextArea from '../../form-items/textarea';

const Form = () => {
  const methods = useForm({
    mode: 'onSubmit',
  });
  return (
    <Wrapper className="col-2">
      <h3>Contact us:</h3>
      <FormProvider {...methods}>
        <form>
          <InputFlexible
            type="text"
            placeholder="Введите Ваше имя"
            inputName="name"
          />
          <InputFlexible
            type="email"
            placeholder="Введите Ваш Email"
            inputName="email"
          />
          <TextArea
            placeholder="Введите Ваше сообщение..."
            inputName="message"
          />
          <InputFlexible type="file" inputName="files" />
          <ButtonDefault type={'submit'} text={'Submit'} />
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
