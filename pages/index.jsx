import MainLayout from '../src/components/layouts/MainLayout';
import IndexPageMainSection from '../src/components/main-page/section.main';

const IndexPage = () => {
  return (
    <MainLayout title={'mainPage'}>
      <IndexPageMainSection />
    </MainLayout>
  );
};

export default IndexPage;
