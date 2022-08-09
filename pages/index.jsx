import MainLayout from '../src/components/layouts/MainLayout';
import ContactUsSection from '../src/components/sections/section.contact-us';
import IndexPageInfoSection from '../src/components/sections/section.info';
import IndexPageMainSection from '../src/components/sections/section.main';
import ServicesSection from '../src/components/sections/section.services';

const IndexPage = () => {
  return (
    <MainLayout title={'mainPage'}>
      <IndexPageMainSection />
      <ServicesSection limit={4}/>
      <IndexPageInfoSection />
      <ContactUsSection />
    </MainLayout>
  );
};

export default IndexPage;
