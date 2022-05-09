import React from 'react';
import styled from 'styled-components';

import HeaderNavItemDefault from './items/default';
import MenuToggle from './items/menuToggle';

const HeaderNav = () => {
  return (
    <Wrapper>
      <MenuToggle />
      <ul className="noLS">
        <HeaderNavItemDefault name="Главная" href="/" />
        <HeaderNavItemDefault name="Услуги" href="/services" />
        <HeaderNavItemDefault name="Продукция" href="/products" />
        <HeaderNavItemDefault name="Акции" href="/special" />
        <HeaderNavItemDefault name="Контакты" href="/contacts" />
        <HeaderNavItemDefault name="Отследить заказ" href="/track" bordered />
        <LangWrapper>
          <HeaderNavItemDefault name="RU" href="/ru" lang />
          <HeaderNavItemDefault name="UA" href="/ua" lang />
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
