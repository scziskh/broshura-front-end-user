import React from 'react';
import styled from 'styled-components';
import FooterInfoItem from './items/info.item';

const Footer = () => (
  <Wrapper>
    <div className="wrapper">
      <div className="flex">
        <FooterInfoItem />
      </div>
    </div>
  </Wrapper>
);

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
