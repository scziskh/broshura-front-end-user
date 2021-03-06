import styled from 'styled-components';

const IndexPageInfoSection = () => (
  <Wrapper>
    <div className="wrapper">
      <h2>Печать брошюр и каталогов в Киеве</h2>
      <div className="flex">
        <div className="w-50">
          <h3>Вёрстка / дизайн брошюры</h3>
          <p>
            Если вам нужно просто распечатать документы и скрепить их одним из
            способов брошюрования, то услуги дизайнера вам не понадобятся. Но
            если речь идёт о каталогах продукции и услуг или меню, то без работы
            дизайнера не обойтись.
          </p>
          <h3>Печать брошюр</h3>
          <p>
            Мы используем цифровую и офсетную печать. Для декорирования обложек
            иногда применяется шелкотрафаретная печать и конгрев (тиснение).
          </p>
          <h3>Послепечатная обработка</h3>
          <p>
            Включает в себя биговку линий сгиба для предотвращения сломов и
            обеспечения длительного использования, фальцовку (сгибание),
            ламинацию, брошюровку, подрезку краёв изделия для безупречного вида
            и т.д.
          </p>
        </div>
        <div className="w-50">
          <h3>Что такое брошюра?</h3>
          <p>
            <strong>Брошюра</strong> — это общее название для многостраничных
            изданий. В изготовлении брошюр используется специальное устройство —
            биндер или термобиндер (для клеевого бесшовного соединения блоков).
          </p>
          <h3>О нас</h3>
          <p>
            Типография <strong>BROSHURA.KIEV.UA</strong> предлагает услуги по
            печати брошюр и переплёту документов, а также изготовление
            презентационных материалов. Мы на рынке уже более 15 лет, за которые
            набрались немало опыта, чтоб сделать ваш заказ быстро, качественно и
            недорого. Удобное месторасположение в 5 минутах ходьбы от станции
            метро Дарница. Вы можете оформить заказ на сайте, в офисе, либо
            написав нам на эллектронный адрес: {' '}
            <a href="mailto:zakaz@broshura.kiev.ua">zakaz@broshura.kiev.ua</a>
          </p>
        </div>
      </div>
    </div>
  </Wrapper>
);

const Wrapper = styled.section`
  & {
    padding-bottom: 48px;
    p {
      margin-bottom: 24px;
      text-align: justify;
    }
    a {
      color: #000000;
      font-weight: 700;
    }
  }
`;

export default IndexPageInfoSection;
