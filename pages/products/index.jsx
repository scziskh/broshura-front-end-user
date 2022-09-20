import PagesLayout from '../../src/components/layouts/PagesLayout';
import ContactUsSection from '../../src/components/sections/section.contact-us';
import ServicesSection from '../../src/components/sections/section.services';

const ServicesPage = () => {
  return (
    <PagesLayout title={'productsPage'} >
      <ServicesSection services={'products'} />
      <ContactUsSection />
    </PagesLayout>
  );
};

export default ServicesPage;

