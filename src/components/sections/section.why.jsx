import Image from 'next/image';
import styled from 'styled-components';
import Container from '../api/Container';

const IndexPageWhySection = () => (
  <Wrapper>
    <div className="wrapper">
      <h2>Почему именно мы?</h2>
      <div className="flex">
        <SingleWrapper className="col-3">
          <Container>
            <Image
              src="/assets/delivery.webp"
              alt=""
              width={200}
              height={200}
            />
          </Container>
          <TextDiv>
            <h3>Доставка</h3>
            <p>
              Мы отправляем Ваши заказы “Новой Почтой”, на такси, а так же
              другими курьерскими службами.
            </p>
          </TextDiv>
        </SingleWrapper>
        <SingleWrapper className="col-3">
          <Container>
            <Image src="/assets/speed.webp" alt="" width={200} height={200} />
          </Container>
          <TextDiv>
            <h3>Скорость</h3>
            <p>
              Благодаря нашему пятнадцатилетнему опыту заказы выполняются
              максимально быстро.
            </p>
          </TextDiv>
        </SingleWrapper>
        <SingleWrapper className="col-3">
          <Container>
            <Image src="/assets/pay.webp" alt="" width={200} height={200} />
          </Container>
          <TextDiv>
            <h3>Оплата</h3>
            <p>
              Заказ вы можете оплатить наличными или картой у нас в офисе, либо
              по счету-фактуре.
            </p>
          </TextDiv>
        </SingleWrapper>
      </div>
    </div>
  </Wrapper>
);

const Wrapper = styled.section`
  & {
    position: relative;
    padding-bottom: 48px;
    background-color: var(--white);
  }
`;

const SingleWrapper = styled.div`
  display: inline-flex;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
  @media screen and (max-width: 1280px) {
    width: calc(50% - 20px);
  }
  @media screen and (max-width: 980px) {
    width: 100%;
  }
`;

const TextDiv = styled.div`
  & {
    width: 100%;
    right: 0;
    padding-left: 40px;
  }
`;

export default IndexPageWhySection;
