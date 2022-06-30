import Image from 'next/image';
import styled from 'styled-components';
import Container from '../api/Container';
import ButtonLink from '../form-items/button.link';

const IndexPageMainSection = () => (
  <Wrapper>
    <Content className="wrapper flex">
      <LeftColumn>
        <h1>Печать брошюр и изготовление каталогов в Киеве</h1>
        <BlackLine />
        <ButtonLink href="/contacts" text={'ORDER_NOW'} />
      </LeftColumn>
      <RightColumn>
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
      </RightColumn>
    </Content>
  </Wrapper>
);

const Wrapper = styled.section`
  height: calc(100vh - 90px);
  min-height: 780px;
  background: var(--yellowGrad);
  @media screen and (max-width: 1600px) {
    min-height: 680px;
  }
  @media screen and (max-width: 1280px) {
    min-height: 560px;
  }
  @media screen and (max-width: 980px) {
    height: calc(100vh - 75px);
  }
  @media screen and (max-width: 768px) {
    min-height: 600px;
  }
`;

const Content = styled.div`
  align-items: center;
  height: 100%;
`;

const LeftColumn = styled.div`
  & {width: calc(45% - 30px)};
  @media screen and (max-width: 980px) {
    width: 90%;
  }
`;

const RightColumn = styled.div`
& {width: calc(55% - 30px)};
  @media screen and (max-width: 980px) {
    display: none;
  }
`;

const Circle = styled.div`
  & {
    width: 720px;
    height: 720px;
    display: flex;
    margin: 0 auto;
    border-radius: 50%;
    position: relative;
    background: var(--greyGrad);
    align-items: center;
  }
  @media screen and (max-width: 1600px) {
    & {
      width: 640px;
      height: 640px;
    }
  }
  @media screen and (max-width: 1280px) {
    & {
      & {
        width: 480px;
        height: 480px;
      }
    }
  }
`;

const BlackLine = styled.div`
  width: 130px;
  height: 10px;
  background: #000000;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.1);
  margin: 42px 0 46px;
`;

export default IndexPageMainSection;
