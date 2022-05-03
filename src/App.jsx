import React from 'react';

//Main
import imgMainFirst from './images/main/main-1.png';
import imgMainSecond from './images/main/main-2.png';
import imgArrow from './images/assets/arrow-right.svg';
import imgArrowDark from './images/assets/arrow-right_dark.svg';
import imgFacebook from './images/assets/facebook.png';
import imgInstagram from './images/assets/instagram.png';
import imgServiceStaples from './images/services/staples.png';
import imgServicePlastic from './images/services/plastic.png';
import imgServiceMetal from './images/services/metal.png';
import imgServiceThermobinder from './images/services/thermobinder.png';
import imgDelivery from './images/whyBlock/delivery.png';
import imgSpeed from './images/whyBlock/speed.png';
import imgPay from './images/whyBlock/pay.png';
import Header from './components/header';
import Logo from './components/logo';

const App = () => (
  <div className="App">
    <Header />
    <section id="main-block" className="yellow">
      <div className="wrapper flex">
        <div className="w-40">
          <h1>Печать брошюр и изготовление каталогов в Киеве</h1>
          <div className="line-black"></div>
          <a href="" className="button">
            Заказать <img src={imgArrow} alt="" />
          </a>
        </div>
        <div className="w-60">
          <div className="ver-align">
            <div className="circle gray">
              <img src={imgMainFirst} alt="" />
            </div>
          </div>
        </div>
      </div>
    </section>
    <section id="services-block">
      <div className="wrapper">
        <h2>Наши услуги</h2>
        <div className="services flex">
          <div className="single-service">
            <a href="" className="article">
              <div className="img">
                <img src={imgServiceStaples} alt="" />
              </div>
              <h3>
                Брошюра на <span>скобу</span>
              </h3>
              <div className="advantages">
                <ul>
                  <li>Простота и скорость изготовления</li>
                  <li>Экономичность</li>
                  <li>Аккуратный внешний вид изделия</li>
                  <li>Возможность раскрывать изделие на 180° и более</li>
                </ul>
              </div>
            </a>
            <a href="" className="button">
              Заказать <img src={imgArrow} alt="" />
            </a>
          </div>
          <div className="single-service">
            <a href="" className="article">
              <div className="img">
                <img src={imgServicePlastic} alt="" />
              </div>
              <h3>
                Чертежи на <span>пластиковую пружину</span>
              </h3>
              <div className="advantages">
                <ul>
                  <li>Надёжность и долговечность</li>
                  <li>Возможность многоразово сшивать и расшивать документ</li>
                  <li>
                    Позволяет сшивать в один том большое количество страниц
                  </li>
                </ul>
              </div>
            </a>
            <a href="" className="button">
              Заказать <img src={imgArrow} />
            </a>
          </div>
          <div className="single-service">
            <a href="" className="article">
              <div className="img">
                <img src={imgServiceMetal} alt="" />
              </div>
              <h3>
                Блокнот на <span>металлическую пружину</span>
              </h3>
              <div className="advantages">
                <ul>
                  <li>Презентабельный и эстетичный внешний вид</li>
                  <li>Возможность раскрывать изделие на 360°</li>
                  <li>Повышенная степень прочности</li>
                </ul>
              </div>
            </a>
            <a href="" className="button">
              Заказать <img src={imgArrow} alt="" />
            </a>
          </div>
          <div className="single-service">
            <a href="" className="article">
              <div className="img">
                <img src={imgServiceThermobinder} alt="" />
              </div>
              <h3>
                Книга на <span>термобиндер</span>
              </h3>
              <div className="advantages">
                <ul>
                  <li>
                    Самый бюджетный вид переплёта для брошюр с большим
                    количеством листов
                  </li>
                  <li>Высокая скорость выполнения сшивки больших тиражей</li>
                </ul>
              </div>
            </a>
            <a href="" className="button">
              Заказать <img src={imgArrow} alt="" />
            </a>
          </div>
        </div>
        <a href="" className="button center yellow">
          Все услуги <img src={imgArrowDark} alt="" />
        </a>
      </div>
    </section>
    <section id="why-block" className="gray">
      <div className="wrapper">
        <h2>Почему именно мы?</h2>
        <div className="flex">
          <div className="single-why">
            <div className="img">
              <img src={imgDelivery} alt="" />
            </div>
            <div className="text ver-align">
              <h3>Доставка</h3>
              <p>
                Мы отправляем Ваши заказы “Новой Почтой”, на такси, а так же
                другими курьерскими службами.
              </p>
            </div>
          </div>
          <div className="single-why">
            <div className="img">
              <img src={imgSpeed} alt="" />
            </div>
            <div className="text ver-align">
              <h3>Скорость</h3>
              <p>
                Благодаря нашему пятнадцатилетнему опыту заказы выполняются
                максимально быстро.
              </p>
            </div>
          </div>
          <div className="single-why">
            <div className="img">
              <img src={imgPay} alt="" />
            </div>
            <div className="text ver-align">
              <h3>Оплата</h3>
              <p>
                Заказ вы можете оплатить наличными или картой у нас в офисе,
                либо по счету-фактуре.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section id="info-block" alt="">
      <div className="wrapper">
        <h2>Печать брошюр и каталогов в Киеве</h2>
        <div className="flex">
          <div className="w-50">
            <h3>О нас</h3>
            <p>
              Типография <strong>BROSHURA.KIEV.UA</strong> предлагает услуги по
              печати брошюр и переплёту документов, а также изготовление
              презентационных материалов. Мы на рынке уже более 15 лет, за
              которые набрались немало опыта, чтоб сделать ваш заказ быстро,
              качественно и недорого. Удобное месторасположение в 5 минутах
              ходьбы от станции метро Дарница. Вы можете оформить заказ на
              сайте, в офисе, либо написав нам на эллектронный адрес:{' '}
              <a href="mailto:zakaz@broshura.kiev.ua">zakaz@broshura.kiev.ua</a>
            </p>
            <h3>Что такое брошюра?</h3>
            <p>
              <strong>Брошюра</strong> — это общее название для многостраничных
              изданий. В изготовлении брошюр используется специальное устройство
              — биндер или термобиндер (для клеевого бесшовного соединения
              блоков).
            </p>
          </div>
          <div className="w-50">
            <h3>Вёрстка / дизайн брошюры</h3>
            <p>
              Если вам нужно просто распечатать документы и скрепить их одним из
              способов брошюрования, то услуги дизайнера вам не понадобятся. Но
              если речь идёт о каталогах продукции и услуг или меню, то без
              работы дизайнера не обойтись.
            </p>
            <h3>Печать брошюр</h3>
            <p>
              Мы используем цифровую и офсетную печать. Для декорирования
              обложек иногда применяется шелкотрафаретная печать и конгрев
              (тиснение).
            </p>
            <h3>Послепечатная обработка</h3>
            <p>
              Включает в себя биговку линий сгиба для предотвращения сломов и
              обеспечения длительного использования, фальцовку (сгибание),
              ламинацию, брошюровку, подрезку краёв изделия для безупречного
              вида и т.д.
            </p>
          </div>
        </div>
      </div>
    </section>
    <section id="contact-block" className="gray">
      <h2>Закажите прямо сейчас</h2>
      <div className="wrapper">
        <div className="flex">
          <div className="w-50">
            <form>
              <input type="text" placeholder="Имя" />
              <input type="email" placeholder="Email" />
              <textarea placeholder="Введите ваше сообщение..."></textarea>
              <input type="file" name="" id="" multiple />
              <button>
                Отправить <img src={imgArrow} />
              </button>
            </form>
          </div>
          <div className="w-50">
            <div className="ver-align">
              <div className="mini-circle yellow">
                <img src={imgMainSecond} alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
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
    </footer>
  </div>
);

export default App;
