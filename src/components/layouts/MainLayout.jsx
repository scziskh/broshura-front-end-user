import Head from 'next/head';
import Header from '../header';
import Footer from '../footer'

const MainLayout = props => {
  return (
    <>
      <Head>
        <title>{`${props.title} | BROSHURA KIEV UA`}</title>
      </Head>
      <Header />
      {props.children}
      <Footer />
    </>
  );
};

export default MainLayout;
