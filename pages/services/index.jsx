import PagesLayout from '../../src/components/layouts/PagesLayout';
import ContactUsSection from '../../src/components/sections/section.contact-us';
import ServicesSection from '../../src/components/sections/section.services';

const ServicesPage = () => {
  return (
    <PagesLayout title={'servicesPage'} page={'services'}>
      <ServicesSection page={`services`} />
      <ContactUsSection />
    </PagesLayout>
  );
};

export default ServicesPage;
