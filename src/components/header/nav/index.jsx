import React from 'react';
import HeaderNavItemBorder from './items/border';
import HeaderNavItemDefault from './items/default';
import HeaderNavItemLang from './items/lang';
import HeaderNavItemToogle from './items/toogle';

const HeaderNav = () => (
  <nav>
    <HeaderNavItemToogle />
    <ul className="menu-box">
      <HeaderNavItemDefault name="main" href="/" />
      <HeaderNavItemBorder />
      <HeaderNavItemLang />
    </ul>
  </nav>
);

export default HeaderNav;
