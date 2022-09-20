import PagesLayout from '../../src/components/layouts/PagesLayout';

const SpecialPage = () => {
  return (
    <PagesLayout title={'specialPage'}>
      <section>
        <div>
          <div>
            <div>
              <a href="">
                <img src="/specials/special-valentine.ru.webp" />
              </a>
            </div>
            <div>
              <a href="">
                <img src="/specials/special-diplom.ru.webp" />
              </a>
            </div>
            <div>
              <a href="">
                <img src="/specials/special-contract.ru.webp" />
              </a>
            </div>
            <div>
              <a href="">
                <img src="/specials/special-delivery.ru.webp" />
              </a>
            </div>
          </div>
        </div>
      </section>
    </PagesLayout>
  );
};

export default SpecialPage;
