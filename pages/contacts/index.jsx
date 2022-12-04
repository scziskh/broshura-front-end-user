import MainLayout from '../../layouts/MainLayout';
import BreadcrumbsSection from '../../components/sections/section.breadcrumbs';
import ContactsSection from '../../components/sections/section.contacts';
import MapSection from '../../components/sections/section.map';

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
