import React from 'react';
import { useRouter } from 'next/router';
import styled from 'styled-components';
import FooterMainSingleItem from './single-item.main';
import { useGetRequest } from '../../../services/get-request';

const FooterMainItem = (props) => {
  const locale = useRouter().locale;
  const text = useGetRequest(`locales.${locale}.footerSection`).data;
  const group = props.group;

  const items = group.map((item, index) => (
    <FooterMainSingleItem
      key={index}
      href={item.href}
      name={text?.[item.name]}
    />
  ));
  return (
    <Wrapper className="col-4">
      <ul className="noLS">{items}</ul>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  li:first-child {
    font-weight: bold;
  }
`;

export default FooterMainItem;
