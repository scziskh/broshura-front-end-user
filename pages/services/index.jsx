import PagesLayout from '../../layouts/PagesLayout';
import ContactUsSection from '../../components/sections/section.contact-us';
import ServicesSection from '../../components/sections/section.services';

const ServicesPage = () => {
  return (
    <PagesLayout title={'servicesPage'}>
      <ServicesSection services={'services'} />
      <ContactUsSection />
    </PagesLayout>
  );
};

export default ServicesPage;
