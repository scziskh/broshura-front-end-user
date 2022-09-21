import PagesLayout from '../../src/components/layouts/PagesLayout';
import SpecialsSection from '../../src/components/sections/section.specials';

const SpecialPage = () => {
  return (
    <PagesLayout title={'specialPage'}>
      <SpecialsSection />
    </PagesLayout>
  );
};

export default SpecialPage;
