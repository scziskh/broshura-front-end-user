import MainLayout from '../layouts/MainLayout';
import ContactUsSection from '../components/sections/section.contact-us';
import IndexPageInfoSection from '../components/sections/section.info';
import IndexPageMainSection from '../components/sections/section.main';
import ServicesSection from '../components/sections/section.services';
import { getTextData } from '../services/static-data';

export const getStaticProps = async ({ locale }) => {
  //list of sections
  const sections = ['main', 'services', 'info', 'contactUs', 'nav', 'footer'];

  const data = await getTextData(sections, locale);
  return { props: { data } };
};

const IndexPage = (props) => {
  const { data } = props;

  return (
    <MainLayout
      title={'mainPage'}
      headerText={data.nav}
      footerText={data.footer}
    >
      <IndexPageMainSection text={data.main} />
      <ServicesSection
        text={data.services}
        services={'services'}
        limit={4}
        white
      />
      <IndexPageInfoSection text={data.info} />
      {/*
      <ContactUsSection />*/}
    </MainLayout>
  );
};

export default IndexPage;
