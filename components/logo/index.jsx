import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import styled from 'styled-components';
import Container from '../api/Container';

const Logo = () => {
  return (
    <Wrapper>
      <Link href="/">
        <a>
          <Container>
            <Image
              src="/assets/logo.svg"
              width={207}
              height={36}
              alt="LOGO"
            />
          </Container>
        </a>
      </Link>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  & {
    margin: 28px 0;
    display: inline-flex;
  }
  @media screen and (max-width: 980px) {
    & {
      margin: 18px 0;
    }
  }
`;

export default Logo;
