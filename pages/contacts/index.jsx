import MainLayout from '../../src/components/layouts/MainLayout';
import BreadcrumbsSection from '../../src/components/sections/section.breadcrumbs';
import ContactsSection from '../../src/components/sections/section.contacts';
import MapSection from '../../src/components/sections/section.map';

const ContactsPage = () => {
  return (
    <MainLayout title={'ContactsPage'}>
      <BreadcrumbsSection />
      <ContactsSection />
      <MapSection />
    </MainLayout>
  );
};

export default ContactsPage;
