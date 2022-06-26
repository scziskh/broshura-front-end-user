import Head from 'next/head';
import Header from '../header';

const MainLayout = props => {
  return (
    <>
      <Head>
        <title>{`${props.title} | BROSHURA KIEVUA`}</title>
      </Head>
      <Header />
      {props.children}
    </>
  );
};

export default MainLayout;
