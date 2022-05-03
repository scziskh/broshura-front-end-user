import React from 'react';
import Logo from '../logo';
import HeaderNav from './nav';

const Header = () => (
  <header>
    <div className="wrapper">
      <Logo />
      <HeaderNav />
    </div>
  </header>
);

export default Header;
