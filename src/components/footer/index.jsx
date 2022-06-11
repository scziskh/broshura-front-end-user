import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import FooterInfoItem from './info.item';

const Footer = () => (
  <Wrapper>
    <div className="wrapper">
      <div className="flex">
        <FooterInfoItem />
        <div className="col-4">
          <ul className="noLS">
            <li>
              <Link to="/services" className="bold">
                Услуги
              </Link>
            </li>
            <li>
              <Link to="/services/staples">Брошюра на скобу</Link>
            </li>
            <li>
              <Link to="/services/metal-spring">
                Сшивка на металлическую пружину
              </Link>
            </li>
            <li>
              <Link to="/services/plastic-spring">
                Сшивка на пластиковую пружину
              </Link>
            </li>
            <li>
              <Link to="/services/thermobinder">Книга на термобиндер</Link>
            </li>
            <li>
              <Link to="/services/plastic-spring">
                Книга на твёрдый переплет
              </Link>
            </li>
            <li>
              <Link to="/services/canal">Диплом на канальный переплет</Link>
            </li>
            <li>
              <Link to="/services/ring">Каталог на кольца</Link>
            </li>
            <li>
              <Link to="/services/folder">Документы в папку</Link>
            </li>
          </ul>
        </div>
        <div className="col-4">
          <ul className="noLS">
            <li>
              <a className="bold-a" href="">
                Продукция
              </a>
            </li>
            <li>
              <a href="">Блокноты</a>
            </li>
            <li>
              <a href="">Каталоги</a>
            </li>
            <li>
              <a href="">Авторефераты</a>
            </li>
            <li>
              <a href="">Книги</a>
            </li>
            <li>
              <a href="">Календари</a>
            </li>
            <li>
              <a href="">Дипломы / Дисертации</a>
            </li>
            <li>
              <a href="">Презентации</a>
            </li>
            <li>
              <a href="">Чертежи</a>
            </li>
          </ul>
        </div>
        <div className="col-4">
          <ul className="noLS">
            <li>
              <a className="bold-a" href="">
                О нас
              </a>
            </li>
            <li>
              <a href="">Контакты</a>
            </li>
            <li>
              <a href="">Акции</a>
            </li>
            <li>
              <a href="">Частые вопросы</a>
            </li>
            <li>
              <a href="">Требования к макетам</a>
            </li>
            <li>
              <a href="">Оплата и доставка</a>
            </li>
            <li>
              <a href="">Условия использования</a>
            </li>
            <li>
              <a href="">Политика конфиденциальности</a>
            </li>
            <li>
              <a href="">Документы</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </Wrapper>
);

const Wrapper = styled.footer`
  & {
    flex-shrink: 0;
    padding: 48px 0;
    width: 100%;
    background-color: var(--black);
    color: var(--white);
    text-align: center;
    li {
      margin: 10px;
      a {
        color: var(--white);
        &:hover {
          text-decoration: underline;
        }
      }
    }
  }
`;

export default Footer;
