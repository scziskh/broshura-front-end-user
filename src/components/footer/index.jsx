import React from 'react';
import styled from 'styled-components';
import FooterInfoItem from './infoItem';

const Footer = () => (
  <Wrapper>
    <div className="wrapper">
      <div className="flex">
        <FooterInfoItem />
        <div className="col-4">
          <ul className="lh noLS">
            <li>
              <a className="bold-a" href="">
                Услуги
              </a>
            </li>
            <li>
              <a href="">Брошюра на скобу</a>
            </li>
            <li>
              <a href="">Сшивка на металлическую пружину</a>
            </li>
            <li>
              <a href="">Сшивка на пластиковую пружину</a>
            </li>
            <li>
              <a href="">Книга на термобиндер</a>
            </li>
            <li>
              <a href="">Книга на твёрдый переплет</a>
            </li>
            <li>
              <a href="">Диплом на канальный переплет</a>
            </li>
            <li>
              <a href="">Каталог на кольца</a>
            </li>
            <li>
              <a href="">Документы в папку</a>
            </li>
          </ul>
        </div>
        <div className="col-4">
          <ul className="lh noLS">
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
          <ul className="lh noLS">
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
