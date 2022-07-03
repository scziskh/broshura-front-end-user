import CalculatorForm from '../calculator/form';
import MainLayout from './MainLayout';

const ServiceLayout = props => {
  return (
    <>
      <MainLayout title={props.title}>
        <CalculatorForm typeBinding={props.typeBinding} />
      </MainLayout>
    </>
  );
};

export default ServiceLayout;
