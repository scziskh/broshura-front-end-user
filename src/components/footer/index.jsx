import React from 'react';
import styled from 'styled-components';
import { builder } from '../helpers/builders/footer';
import FooterInfoItem from './items/item.info';
import FooterMainItem from './items/item.main';

const Footer = () => {
  const keysGroups = Object.keys(builder);
  const groups = keysGroups.map((item, index) => (
    <FooterMainItem key={index} group={builder[item]} />
  ));
  return (
    <Wrapper>
      <div className="wrapper">
        <div className="flex">
          <FooterInfoItem />
          {groups}
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.footer`
  & {
    flex-shrink: 0;
    padding: 48px 0;
    width: 100%;
    background-color: var(--black);
    color: var(--white);
    text-align: center;
    li {
      margin: 10px;
      a {
        color: var(--white);
        &:hover {
          text-decoration: underline;
        }
      }
    }
  }
`;

export default Footer;
