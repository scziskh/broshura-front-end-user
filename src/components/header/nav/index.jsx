import React from 'react';
import styled from 'styled-components';
import { builder } from '../helpers/builder.header';

import MenuItem from './menu.item';
import ToggleItem from './toggle.item';

const HeaderNav = () => {
  const mainGroup = builder.GROUP_MAIN
  const trackGroup = builder.GROUP_TRACK
  const langGroup = builder.GROUP_LANG

  const keysMainItems = Object.keys(mainGroup);
  const itemsMain = keysMainItems.map((item) => (
      <MenuItem
        key = {item}
        name={mainGroup[item].name}
        href={mainGroup[item].href}

      />
  ));

  return (
    <Wrapper>
      <ToggleItem />
      <ul className="noLS">
        {itemsMain}
        <MenuItem name={trackGroup.TRACK_ORDER_PAGE.name} href={trackGroup.TRACK_ORDER_PAGE.href} bordered />
        <LangWrapper>
          <MenuItem name={langGroup.RU_LANG_SWITCH.name} href={ langGroup.RU_LANG_SWITCH.href }lang />
          <MenuItem name={langGroup.UK_LANG_SWITCH.name} href={ langGroup.UK_LANG_SWITCH.href }lang />
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
