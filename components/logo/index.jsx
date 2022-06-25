import Link from 'next/link';
import Image from 'next/dist/client/image';
import styled from 'styled-components';

const Logo = () => {
  return (
    <Wrapper>
      <Link href="/">
        <Image src="/assets/logo.svg" width={207} height={36} alt="LOGO" />
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
