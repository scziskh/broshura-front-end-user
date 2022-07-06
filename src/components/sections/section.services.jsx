import Image from 'next/image';
import styled from 'styled-components';
import Container from '../api/Container';
import ButtonLink from '../form-items/button.link';

const ServicesSection = () => (
  <Wrapper id="services-block">
    <h2>Наши услуги</h2>
    <Services className="wrapper">
      <SingleService className="single-service">
        <a href="" className="article">
          <ImageBackground className="img">
            <Container>
              <Image src="/assets/metal.webp" layout="fill" alt="" />
            </Container>
          </ImageBackground>
          <h3>
            Чертежи на <span>пластиковую пружину</span>
          </h3>
          <AdvantagesDiv>
            <ul>
              <li>Надёжность и долговечность</li>
              <li>Возможность многоразово сшивать и расшивать документ</li>
              <li>Позволяет сшивать в один том большое количество страниц</li>
            </ul>
          </AdvantagesDiv>
        </a>

        <ButtonLink text="ORDER_NOW" href="/services/draws" />
      </SingleService>
    </Services>
    <ButtonLink text="ALL_SERVICES" href="/services" />
  </Wrapper>
);

const Wrapper = styled.section`
  padding-bottom: 100px;
`;

const Services = styled.div`
margin-bottom: 48px;
position: relative;
h3 {
    height: 72px;
    padding-top: 24px;
    }
`;

const SingleService = styled.div`
  & {width: calc(25% - 30px)};
  @media screen and (max-width: 1280px) {
    & {width: calc(50% - 20px)};
  }
  @media screen and (max-width: 800px) {
    & {width: 100%};
  }
`;

const ImageBackground = styled.div`
  & {
    margin-bottom: 48px;
    background: #212121;
    width: 100%;
  img {
    vertical-align: bottom;
    width: 100%;
    
  }
  }
`;

const AdvantagesDiv = styled.div`
width: 100%;
height: 160px;
  
`

export default ServicesSection;
