import Head from 'next/head';
import Header from '../header';
import Footer from '../footer';
import styled from 'styled-components';

const MainLayout = props => {
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
