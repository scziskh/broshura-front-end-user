import Image from 'next/image';
import styled from 'styled-components';
import { FormProvider, useForm } from 'react-hook-form';
import Container from '../api/Container';
import ButtonDefault from '../form-items/button.default';
import InputFlexible from '../form-items/input.flexible';
import TextArea from '../form-items/textarea';

const ContactUsSection = () => {
  const methods = useForm({
    mode: 'onSubmit',
  });
  return (
    <Wrapper>
      <h2>Закажите прямо сейчас</h2>
      <div className="wrapper flex">
        <div className="col-2">
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
              <ButtonDefault type={'submit'} text={'SUBMIT'} />
            </form>
          </FormProvider>
        </div>
        <div className="col-2">
          <Circle>
            <Container>
              <Image
                src="/assets/main-1.webp"
                alt=""
                width={800}
                height={610}
              />
            </Container>
          </Circle>
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  & {
    background-color: var(--white);
    padding-bottom: 64px;
    .col-2 {
      display: flex;
      justify-content: center;
      align-items: center;
    }
    form {
      padding: 30px 20px;
      background-color: white;
      input,
      textarea {
        width: 100%;
        margin: 0 0 36px;
        font-size: 1em;
      }
      textarea {
        height: 240px;
      }
    }
  }
`;

const Circle = styled.div`
  & {
    background: var(--yellowGrad);
    width: 600px;
    height: 600px;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  @media screen and (max-width: 1600px) {
    & {
      width: 520px;
      height: 520px;
      border-radius: 50%;
    }
  }

  @media screen and (max-width: 1280px) {
    & {
      width: 460px;
      height: 460px;
      border-radius: 50%;
    }
  }
  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export default ContactUsSection;
