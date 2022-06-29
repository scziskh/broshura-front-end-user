import MainLayout from '../src/components/layouts/MainLayout';
import IndexPageInfoSection from '../src/components/main-page/section.info';
import IndexPageMainSection from '../src/components/main-page/section.main';

const IndexPage = () => {
  return (
    <MainLayout title={'mainPage'}>
      <IndexPageMainSection />
      <IndexPageInfoSection />
    </MainLayout>
  );
};

export default IndexPage;
