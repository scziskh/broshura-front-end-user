import { FormProvider, useForm } from 'react-hook-form';
import styled from 'styled-components';
import ButtonDefault from '../../form-items/button.default';
import InputFlexible from '../../form-items/input.flexible';
import Info from './info';

const TrackSection = () => {
  const methods = useForm({
    mode: 'onSubmit',
  });
  return (
    <Wrapper className="wrapper flex">
      <FormWrapper className="col-2">
        <FormProvider {...methods}>
          <form>
            <InputFlexible
              type="text"
              placeholder="Введите номер заказа"
              inputName="track"
            />
            <ButtonDefault type={'submit'} text={'Submit'} />
          </form>
        </FormProvider>
      </FormWrapper>
      <Info />
    </Wrapper>
  );
};

const Wrapper = styled.section`
  padding-bottom: 64px;
  input {
    width: 100%;
  }
`;
const FormWrapper = styled.div`
  button {
    margin: 48px 0 0;
  }
`;

export default TrackSection;
