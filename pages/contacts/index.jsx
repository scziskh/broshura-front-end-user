import MainLayout from '../../src/components/layouts/MainLayout';
import BreadcrumbsSection from '../../src/components/sections/section.breadcrumbs';

const ContactsPage = () => {
  return (
    <MainLayout title={'ContactsPage'}>
      <BreadcrumbsSection />
      <section id="contact-block">
        <div className="wrapper">
          <div className="contact flex">
            <div className="w-50">
              <h3>Напишите нам:</h3>
              <form>
                <input type="text" placeholder="Имя" />
                <input type="email" placeholder="Email" />
                <textarea placeholder="Введите ваше сообщение..."></textarea>
                <input type="file" name="" id="" multiple />
                <button>
                  Отправить <img src="img/arow-right.svg" />
                </button>
              </form>
            </div>
            <div className="w-50">
              <h3>Контакты:</h3>
              <ul>
                <li>
                  <a href="">
                    <span className="icon mail"></span>zakaz@broshura.kiev.ua
                  </a>
                </li>
                <li>
                  <a href="">
                    <span className="icon phone"></span>+38 093 150 75 10
                  </a>
                </li>
                <li>
                  <a href="">
                    <span className="icon location"></span>г. Киев, вул.
                    Краковская, 6А
                  </a>
                </li>
              </ul>
              <h3>График работы:</h3>
              <ul>
                <li>
                  <span className="icon calendar"></span>Понедельник - пятница
                </li>
                <li>
                  <span className="icon time"></span>9:15 – 18:00
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      <section className="map">
        <div className="wrapper">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3592.5860466409226!2d30.612988579855035!3d50.45335665990805!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40d4cff857c49d23%3A0x37d266431a5cb020!2z0YPQuy4g0JrRgNCw0LrQvtCy0YHQutCw0Y8sIDbQkCwg0JrQuNC10LIsIDAyMDAw!5e0!3m2!1sru!2sua!4v1639265571313!5m2!1sru!2sua"
            width="100%"
            height="450"
            loading="lazy"
          />
        </div>
      </section>
    </MainLayout>
  );
};

export default ContactsPage;
