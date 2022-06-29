import Image from 'next/image';
import styled from 'styled-components';
import Container from '../api/Container';
import ButtonDefault from '../gui/button.default';

const ContactUsSection = () => (
  <Wrapper>
    <h2>Закажите прямо сейчас</h2>
    <div className="wrapper flex">
      <div className="w-50">
        <form>
          <input type="text" placeholder="Имя" />
          <input type="email" placeholder="Email" />
          <textarea placeholder="Введите ваше сообщение..."></textarea>
          <input type="file" name="" id="" multiple />
          <ButtonDefault type="submit" text={'SUBMIT'} />
        </form>
      </div>
      <div className="w-50">
        <Circle>
          <Container>
            <Image src="/assets/main-1.webp" alt="" width={800} height={610} />
          </Container>
        </Circle>
      </div>
    </div>
  </Wrapper>
);

const Wrapper = styled.section`
  & {
    padding-bottom: 64px;
    background: var(--greyGrad);
    .w-50 {
      display: flex;
      justify-content: center;
      align-items: center;
    }
    input,
    textarea {
      width: 100%;
      margin: 0 0 36px;
    }
    textarea {
      height: 240px;
    }
  }
`;

const Circle = styled.div`
  & {
    background: var(--yellowGrad);
    width: 500px;
    height: 500px;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  @media screen and (max-width: 1600px) {
    & {
      width: 480px;
      height: 480px;
      border-radius: 50%;
    }
  }

  @media screen and (max-width: 1280px) {
    & {
      width: 380px;
      height: 380px;
      border-radius: 50%;
    }
  }
  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export default ContactUsSection;
