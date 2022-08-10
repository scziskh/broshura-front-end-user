import PagesLayout from '../../src/components/layouts/PagesLayout';
import ContactUsSection from '../../src/components/sections/section.contact-us';
import ServicesSection from '../../src/components/sections/section.services';

const ProductPage = () => {
  return (
    <PagesLayout title={'productsPage'} page={'products'}>
      <ServicesSection page={`products`} />
      <ContactUsSection />
    </PagesLayout>
  );
};

export default ProductPage;
