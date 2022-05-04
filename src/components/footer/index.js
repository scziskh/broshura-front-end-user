import React from 'react';
import Logo from '../logo';
import imgFacebook from './images/assets/facebook.png';
import imgInstagram from './images/assets/instagram.png';

const Footer = () => (

<footer>
      <div className="wrapper">
        <div className="flex">
          <div className="w-25">
            <ul>
              <Logo />
              <li className="block">
                <a href="" target="_blank">
                  г. Киев, ул. Краковская 6А
                </a>
              </li>
              <li>
                <a href="tel:+380631234567">+38 063 123 4567</a>
              </li>
              <li>
                <a href="email:zakaz@broshura.kiev.ua">
                  zakaz@broshura.kiev.ua
                </a>
              </li>
              <li className="block">
                <b>Графік роботи:</b>
              </li>
              <li>ПН-ПТ: 9:15 - 18:00</li>
              <li>СБ-ВС, праздники: выходные</li>
              <li className="block">
                <a href="">
                  <img className="ico" src={imgFacebook} alt="" />
                </a>
                <a href="">
                  <img className="ico" src={imgInstagram} alt="" />
                </a>
              </li>
            </ul>
          </div>
          <div className="w-25">
            <ul className="lh">
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
          <div className="w-25">
            <ul className="lh">
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
          <div className="w-25">
            <ul className="lh">
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
    </footer>);

    export default Footer;