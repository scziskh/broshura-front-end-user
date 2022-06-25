import Head from 'next/head';
import Header from '../components/header';

const MainLayout = ({ children }) => {
  return (
    <>
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="true"
        />
      </Head>
      <Header />
      {children}
    </>
  );
};

export default MainLayout;
