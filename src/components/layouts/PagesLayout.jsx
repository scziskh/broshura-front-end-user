import BreadcrumbsSection from '../sections/section.breadcrumbs';
import MainLayout from './MainLayout';

const PagesLayout = (props) => {
  return (
    <MainLayout title={props.title}>
      <BreadcrumbsSection />
      {props.children}
    </MainLayout>
  );
};

export default PagesLayout;
