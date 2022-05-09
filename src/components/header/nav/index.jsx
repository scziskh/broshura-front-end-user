import React from 'react';
import styled from 'styled-components';

import HeaderNavItemDefault from './items/default';

const HeaderNav = () => (
  <Wrapper>
    <input id="menu-toggle" type="checkbox" />
    <label htmlFor="menu-toggle">
      <span></span>
    </label>
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

const Wrapper = styled.nav`
  & {
    position: absolute;
    right: 0;
    top: 36px;
    display: inline-flex;
    input {
      display: none;
    }
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
      input:checked ~ ul {
        background-color: var(--black);
        visibility: visible;
        right: 0;
      }
      input:checked ~ label {
        & > span {
          -webkit-transform: rotate(45deg);
          transform: rotate(45deg);
          &::before {
            top: 0;
            -webkit-transform: rotate(0);
            transform: rotate(0);
          }
          &::after {
            top: 0;
            -webkit-transform: rotate(90deg);
            transform: rotate(90deg);
          }
        }
      }
      label {
        background: linear-gradient(-45deg, #ffff00, #ffc700);
        display: flex;
        align-items: center;
        position: absolute;
        top: 18px;
        right: 18px;
        width: 40px;
        height: 40px;
        cursor: pointer;
        z-index: 100;
        border-radius: 10px;
        & > span,
        & > span::before,
        & > span::after {
          display: block;
          position: absolute;
          left: 7.5px;
          width: 25px;
          height: 2px;
          background-color: var(--black);
          transition-duration: var(--transition);
        }
        & > span::before {
          left: 0;
          content: '';
          top: -8px;
        }
        & > span::after {
          left: 0;
          content: '';
          top: 8px;
        }
      }
    }
  }
`;

export default HeaderNav;
