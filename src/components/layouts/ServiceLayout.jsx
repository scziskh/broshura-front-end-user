import CalculatorForm from '../calculator/form';
import PagesLayout from './PagesLayout';

const ServiceLayout = (props) => {
  return (
    <PagesLayout title={props.title}>
      <CalculatorForm typeBinding={props.typeBinding} />
    </PagesLayout>
  );
};

export default ServiceLayout;
