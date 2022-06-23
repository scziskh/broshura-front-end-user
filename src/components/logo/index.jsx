import React from 'react';
import imgLogo from '../../assets/logo.svg';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Logo = () => (
  <Wrapper>
    <Link to="/">
      <img src={imgLogo} alt="" />
    </Link>
  </Wrapper>
);

const Wrapper = styled.div`
  & {
    display: inline-flex;
    img {
      height: 36px;
      margin: 28px 0;
    }
  }
  @media screen and (max-width: 980px) {
    & {
      img {
        margin: 18px 0;
      }
    }
  }
`;

export default Logo;
