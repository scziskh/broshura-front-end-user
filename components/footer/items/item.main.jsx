import React from 'react';
import { useRouter } from 'next/router';
import styled from 'styled-components';
import FooterMainSingleItem from './single-item.main';
import { useGetLocaleQuery } from '../../../services/redux/api/localeApi';

const FooterMainItem = (props) => {
  const locale = useRouter().locale;
  const { data: text } = useGetLocaleQuery({
    locale,
    part: 'footerSection',
  });
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
