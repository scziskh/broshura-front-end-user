import React from 'react';

const HeaderNavItemDefault = props => (
  <li>
    <a href={props.href}  className={props.className}>{props.name}</a>
  </li>
);

export default HeaderNavItemDefault;
