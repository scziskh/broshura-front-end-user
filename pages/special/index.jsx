import PagesLayout from '../../layouts/PagesLayout';
import SpecialsSection from '../../components/sections/section.specials';

const SpecialPage = () => {
  return (
    <PagesLayout title={'specialPage'}>
      <SpecialsSection />
    </PagesLayout>
  );
};

export default SpecialPage;
