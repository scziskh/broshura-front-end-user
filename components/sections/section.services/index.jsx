import styled from 'styled-components';
import ButtonLink from '../../form-items/button.link';
import SingleService from './single-service';
import { builder } from '../../../helpers/builders/services';
import { useEffect, useState } from 'react';

const ServicesSection = (props) => {
  const { text } = props;

  const [limit, setLimit] = useState(
    props.limit ?? builder[props.services].length,
  );

  useEffect(
    () => setLimit(props.limit ?? builder[props.services].length),
    [props.limit, props.services],
  );

  const buttonService = text?.button_service;
  const services = builder[props.services].map((element, index) => {
    if (index < limit) {
      const textElement = text?.[element.name];
      const { href, img, alt } = element;

      const bind = textElement?.bind;
      const name = textElement?.name;
      const adv = textElement?.adv;

      const props = { href, img, alt, bind, name, adv, buttonService };

      return <SingleService {...props} key={index} />;
    }
  });

  const header = props.limit ? <h2>{text?.services_header}</h2> : '';
  const button = props.limit ? (
    <AlignCenter>
      <ButtonLink text={text?.button_all_services} href="/services" />
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
  background-color: ${(props) => {
    if (props.white) return 'var(--white)';
  }};
`;

const Services = styled.div`
  margin-bottom: 24px;
  margin-top: ${(props) => (props.limit ? '0px' : '48px')};
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
