import styled from 'styled-components';
import ButtonLink from '../../form-items/button.link';
import SingleService from './single-service';
import { builder } from '../../helpers/builders/services';
import { useEffect, useState } from 'react';

const ServicesSection = props => {
  const builderServices = builder;

  const [limit, setLimit] = useState(0);
  useEffect(() => setLimit(props.limit ?? builder.length), [props.limit]);
  useEffect(() => {
    if (builderServices) {
      return (builderServices.length = limit);
    }
  }, [limit]);

  const services = builderServices.map((element, index) => (
    <SingleService
      key={index}
      productName={element.productName}
      serviceName={element.serviceName}
      href={element.href}
      img={element.img}
      alt={element.alt}
      advantages={element.advantages}
    />
  ));

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
