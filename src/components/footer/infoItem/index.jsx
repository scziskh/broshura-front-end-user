import React from 'react';
import styled from 'styled-components';
import Logo from '../../logo';
import imgFacebook from './items/facebook.png';
import imgInstagram from './items/instagram.png';

const FooterInfoItem = () => (
  <Wrapper className="col-4">
    <ul className="noLS">
      <Logo />
      <li>
        <a href="google.com" target="_blank">
          г. Киев, ул. Краковская 6А
        </a>
      </li>
      <li>
        <a href="tel:+380631234567">+38 063 123 4567</a>
      </li>
      <li>
        <a href="mailto:zakaz@broshura.kiev.ua">zakaz@broshura.kiev.ua</a>
      </li>
      <li className="block">
        <b>Графік роботи:</b>
      </li>
      <li>ПН-ПТ: 9:15 - 18:00</li>
      <li>СБ-ВС, праздники: выходные</li>
      <li className="block">
        <a href="facebook.com" target="_blank">
          <img className="ico" src={imgFacebook} alt="" />
        </a>
        <a href="instagram.com" target="_blank">
          <img className="ico" src={imgInstagram} alt="" />
        </a>
      </li>
    </ul>
  </Wrapper>
);

const Wrapper = styled.div`
  & {
  }
`;

export default FooterInfoItem;
