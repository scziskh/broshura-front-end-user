import PagesLayout from '../../layouts/PagesLayout';
import ContactUsSection from '../../components/sections/section.contact-us';
import ServicesSection from '../../components/sections/section.services';
import { getStaticData } from '../../services/static-data';

export const getStaticProps = async () => {
  //list of sections
  const sections = [
    'main-section',
    'services-section',
    'info-section',
    'contactus-section',
  ];

  //get text data of sections
  //
  //section-name: {
  //  lang: {
  //    data
  //  }
  //  ...
  //}
  const data = await getStaticData(`text-data`, sections);

  if (!data) {
    return {
      notFound: true,
    };
  }

  return { props: { data } };
};

const ServicesPage = (props) => {
  return (
    <PagesLayout title={'servicesPage'}>
      <ServicesSection services={'services'} text={'services-section'} />
      <ContactUsSection />
    </PagesLayout>
  );
};

export default ServicesPage;
