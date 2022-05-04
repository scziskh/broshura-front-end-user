import React from 'react';
import HeaderNavItemDefault from './items/default';
import HeaderNavItemLang from './items/lang';
import HeaderNavItemToogle from './items/toogle';

const HeaderNav = () => (
  <nav>
    <HeaderNavItemToogle />
    <ul className="menu-box">
      <HeaderNavItemDefault name="Главная" href="/" className="default" />
      <HeaderNavItemDefault
        name="Услуги"
        href="/services"
        className="default"
      />
      <HeaderNavItemDefault
        name="Продукция"
        href="/products"
        className="default"
      />
      <HeaderNavItemDefault name="Акции" href="/special" className="default" />
      <HeaderNavItemDefault
        name="Контакты"
        href="/contacts"
        className="default"
      />
      <HeaderNavItemDefault
        name="Отследить заказ"
        href="/"
        className="border"
      />
      <HeaderNavItemLang />
    </ul>
  </nav>
);

export default HeaderNav;
