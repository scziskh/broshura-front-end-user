import MainLayout from './MainLayout';

const ServiceLayout = props => {
  return (
    <>
      <MainLayout title={props.title}>{props.children}</MainLayout>
    </>
  );
};

export default ServiceLayout;
