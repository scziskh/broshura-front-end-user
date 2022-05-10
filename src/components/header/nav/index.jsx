import React from 'react';
import styled from 'styled-components';

import NavItem from './items/item';
import NavToggle from './items/navToggle';

const HeaderNav = () => {
  return (
    <Wrapper>
      <NavToggle />
      <ul className="noLS">
        <NavItem name="Главная" href="/" />
        <NavItem name="Услуги" href="/services" />
        <NavItem name="Продукция" href="/products" />
        <NavItem name="Акции" href="/special" />
        <NavItem name="Контакты" href="/contacts" />
        <NavItem name="Отследить заказ" href="/track" bordered />
        <LangWrapper>
          <NavItem name="RU" href="/ru" lang />
          <NavItem name="UA" href="/ua" lang />
        </LangWrapper>
      </ul>
    </Wrapper>
  );
};

const Wrapper = styled.nav`
  & {
    position: absolute;
    right: 0;
    top: 36px;
    display: inline-flex;
    ul {
      display: inline-flex;
    }
  }
  @media screen and (max-width: 980px) {
    & {
      z-index: 120;
      position: fixed;
      top: 0;
      left: 0;
      ul {
        display: block;
        position: fixed;
        visibility: hidden;
        top: 0;
        right: -100%;
        width: 80%;
        max-width: 360px;
        height: 100%;
        padding: 64px 0;
        text-align: center;
        background-color: var(--black);
        transition-duration: var(--transition);
        z-index: 99;
        box-shadow: var(--blackShadow);
      }
    }
  }
`;

const LangWrapper = styled.div`
  & {
    display: inline-flex;
    margin-left: 15px;
  }
  @media screen and (max-width: 980px) {
    & {
      position: absolute;
      bottom: calc(100% - 100vh);
      right: 50%;
      transform: translateX(50%);
      margin-left: 0;
    }
  }
`;

export default HeaderNav;
