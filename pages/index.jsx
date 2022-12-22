import { useRouter } from 'next/router';
import MainLayout from '../layouts/MainLayout';
import ContactUsSection from '../components/sections/section.contact-us';
import IndexPageInfoSection from '../components/sections/section.info';
import IndexPageMainSection from '../components/sections/section.main';
import ServicesSection from '../components/sections/section.services';
import { useGetLocaleQuery } from '../services/redux/api/localeApi';
import { getStaticData } from '../services/static-data';

export const getStaticProps = async () => {
  const data = await getStaticData(`text-data`, [
    `breadcrumbs-section-copy`,
    `index-page`,
  ]);

  return { props: { data } };
};

const IndexPage = (props) => {
  console.log(props.data);
  const locale = useRouter().locale;
  const { data: text } = useGetLocaleQuery({ locale, part: 'mainPage' });

  return (
    <MainLayout title={'mainPage'}>
      <IndexPageMainSection text={text?.mainSection} />
      <ServicesSection services={'services'} limit={4} white />
      <IndexPageInfoSection text={text?.infoSection} />
      <ContactUsSection />
    </MainLayout>
  );
};

export default IndexPage;
