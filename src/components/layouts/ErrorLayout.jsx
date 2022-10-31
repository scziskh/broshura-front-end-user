import Head from 'next/head';
import styled from 'styled-components';
import ButtonLink from '../form-items/button.link';
import ErrorSection from '../sections/section.error';

const ErrorLayout = (props) => {
  const button = [];
  if (props.button) {
    button.push(<ButtonLink href="/" text="main_page"></ButtonLink>);
  }

  return (
    <>
      <Head>
        <title>{`${props.err}`}</title>
      </Head>
      <Wrapper>
        <ErrorSection err={props.err} />
        {button}
      </Wrapper>
    </>
  );
};

const Wrapper = styled.div`
  width: 100%;
  background: var(--yellowGrad);
  flex: 1;
  text-align: center;
  vertical-align: middle;
`;

export default ErrorLayout;
