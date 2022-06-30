import Image from 'next/image';
import styled from 'styled-components';
import Container from '../api/Container';
import ButtonLink from '../form-items/button.link';

const ServicesSection = props => (
  <Wrapper id="services-block">
    <h2>Наши услуги</h2>
    <Services className="wrapper">
      <div class="single-service">
        <a href="" class="article">
          <ImageBackground class="img">
            <Container>
              <Image src="/assets/plastic.webp" layout="fill" />
            </Container>
          </ImageBackground>
          <h3>
            Чертежи на <span>пластиковую пружину</span>
          </h3>
          <div class="advantages">
            <ul>
              <li>Надёжность и долговечность</li>
              <li>Возможность многоразово сшивать и расшивать документ</li>
              <li>Позволяет сшивать в один том большое количество страниц</li>
            </ul>
          </div>
        </a>

        <ButtonLink text="ORDER_NOW" href="/services/draws" />
      </div>
    </Services>
    <ButtonLink text="ALL_SERVICES" href="/services" />
  </Wrapper>
);

const Wrapper = styled.section`
  padding-bottom: 100px;
`;

const Services = styled.div`
  display: flex;
`;

const ImageBackground = styled.div`
  margin-bottom: 48px;
  img {
    vertical-align: bottom;
    width: 100%;
  }
`;

export default ServicesSection;
