import styled from 'styled-components';
import ButtonLink from '../../form-items/button.link';
import SingleService from './single-service';
import { builder } from '../../helpers/builders/services';

const ServicesSection = props => {
  const builderLimit = props.limit ?? builder.length;

  const services = builder.map((element, index) => {
    if (index < builderLimit) {
      return (
        <SingleService
          key={index}
          productName={element.productName}
          serviceName={element.serviceName}
          href={element.href}
          img={element.img}
          alt={element.alt}
          advantages={element.advantages}
        />
      );
    }
    return <></>;
  });

  const header = props.limit ? <h2>Наши услуги</h2> : '';
  const button = props.limit ? (
    <AlignCenter>
      <ButtonLink text="ALL_SERVICES" href="/services" />
    </AlignCenter>
  ) : (
    ''
  );

  return (
    <Wrapper {...props}>
      {header}
      <Services className="wrapper flex">{services}</Services>
      {button}
    </Wrapper>
  );
};

const Wrapper = styled.section`
  padding-bottom: 48px;
  background-color: ${props => {
    if (props.white) return 'var(--white)';
  }};
`;

const Services = styled.div`
  margin-bottom: 24px;
  margin-top: ${props => (props.limit ? '0px' : '48px')};
  h3 {
    padding-top: 18px;
    span {
      display: block;
    }
  }
  @media screen and (max-width: 1600px) {
    h3 {
      padding-top: 12px;
    }
  }
  @media screen and (max-width: 1280px) {
    h3 {
      padding-top: 14px;
    }
  }
`;

const AlignCenter = styled.div`
  width: 100%;
  text-align: center;
`;

export default ServicesSection;
