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
        <div>
          <ErrorSection err={props.err} />
          {button}
        </div>
      </Wrapper>
    </>
  );
};

const Wrapper = styled.div`
  display: flex;
  width: 100%;
  background: var(--yellowGrad);
  flex: 1;
  justify-content: center;
  align-items: center;
  text-align: center;
`;

export default ErrorLayout;
