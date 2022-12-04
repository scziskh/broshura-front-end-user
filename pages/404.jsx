import ErrorLayout from '../layouts/ErrorLayout';

const NotFoundPage = () => {
  return <ErrorLayout err={`err_404`} button={true}></ErrorLayout>;
};

export default NotFoundPage;
