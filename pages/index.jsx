import { useRouter } from 'next/router';
import MainLayout from '../layouts/MainLayout';
import ContactUsSection from '../components/sections/section.contact-us';
import IndexPageInfoSection from '../components/sections/section.info';
import IndexPageMainSection from '../components/sections/section.main';
import ServicesSection from '../components/sections/section.services';
import { getStaticData } from '../services/static-data';

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
  //}
  const data = await getStaticData(`text-data`, sections);

  return { props: { data } };
};

const IndexPage = (props) => {
  const locale = useRouter().locale;
  const { data: text } = props;

  return (
    <MainLayout title={'mainPage'}>
      <IndexPageMainSection text={text[`main-section`][locale]} />
      <ServicesSection
        text={text[`services-section`][locale]}
        services={'services'}
        limit={4}
        white
      />
      <IndexPageInfoSection text={text[`info-section`][locale]} />
      {/*
      <ContactUsSection />*/}
    </MainLayout>
  );
};

export default IndexPage;
