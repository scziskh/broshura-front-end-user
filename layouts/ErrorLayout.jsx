import Head from 'next/head';
import { useRouter } from 'next/router';
import styled from 'styled-components';
import ButtonLink from '../components/form-items/button.link';
import ErrorSection from '../components/sections/section.error';
import { useGetLocaleQuery } from '../services/redux/api/localeApi';

const ErrorLayout = (props) => {
  const locale = useRouter().locale;
  const { data: text } = useGetLocaleQuery({ locale, part: 'errorPage' });

  const err = text?.[props.err];
  const button = [];
  if (err?.button) {
    button.push(
      <ButtonWrapper>
        <ButtonLink href="/" text={err.button}></ButtonLink>
      </ButtonWrapper>,
    );
  }
  console.log(text);

  return (
    <>
      <Head>
        <title>{`${err?.name}`}</title>
      </Head>
      <Wrapper>
        <Div>
          <ErrorSection err={err} />
          {button}
        </Div>
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

const Div = styled.div`
  background-color: rgba(255, 255, 255, 0.3);
  padding: 32px;
  max-width: 360px;
  box-shadow: 5px 5px 10px;
`;

const ButtonWrapper = styled.div`
  margin: 32px 0 12px;
`;

export default ErrorLayout;
