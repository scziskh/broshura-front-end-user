import MainLayout from '../layouts/MainLayout';
import ContactUsSection from '../components/sections/section.contact-us';
import IndexPageInfoSection from '../components/sections/section.info';
import IndexPageMainSection from '../components/sections/section.main';
import ServicesSection from '../components/sections/section.services';

const IndexPage = () => {
  return (
    <MainLayout title={'mainPage'}>
      <IndexPageMainSection />
      <ServicesSection services={'services'} limit={4} white />
      <IndexPageInfoSection />
      <ContactUsSection />
    </MainLayout>
  );
};

export default IndexPage;
