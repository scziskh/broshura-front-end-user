import ErrorLayout from '../src/components/layouts/ErrorLayout';

const NotFoundPage = () => {
  return <ErrorLayout err={`err_404`} button={true}></ErrorLayout>;
};

export default NotFoundPage;
