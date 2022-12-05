import Head from 'next/head';
import styled from 'styled-components';
import Header from '../components/header';
import Footer from '../components/footer';

const MainLayout = (props) => {
  return (
    <>
      <Head>
        <title>{`${props.title} | BROSHURA KIEV UA`}</title>
      </Head>
      <Header />
      <Content>{props.children}</Content>
      <Footer />
    </>
  );
};

const Content = styled.div`
  & {
    flex: 1;
  }
`;

export default MainLayout;
