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
        <a
          href="https://www.google.com/maps/place/%D0%98%D0%B7%D0%B3%D0%BE%D1%82%D0%BE%D0%B2%D0%BB%D0%B5%D0%BD%D0%B8%D0%B5+%D0%B1%D1%80%D0%BE%D1%88%D1%8E%D1%80+%D0%B8+%D0%BF%D0%B5%D1%87%D0%B0%D1%82%D1%8C+%D0%BA%D0%B0%D1%82%D0%B0%D0%BB%D0%BE%D0%B3%D0%BE%D0%B2+%D0%B2+%D0%9A%D0%B8%D0%B5%D0%B2%D0%B5/@50.4522412,30.615739,15z/data=!4m2!3m1!1s0x0:0xdeae5cf83341aa01?sa=X&ved=2ahUKEwirkZvlkoT4AhWTRPEDHdCFBrEQ_BJ6BAg5EAM"
          target="_blank"
          rel="noreferrer"
        >
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
