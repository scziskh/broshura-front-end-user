import BreadcrumbsSection from '../sections/section.breadcrumbs';
import MainLayout from './MainLayout';

const PagesLayout = props => {
  return (
    <>
      <MainLayout title={props.title}>
        <BreadcrumbsSection page={props.page} />
        {props.children}
      </MainLayout>
    </>
  );
};

export default PagesLayout;
