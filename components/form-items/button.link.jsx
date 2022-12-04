import Image from 'next/image';
import Link from 'next/link';
import styled from 'styled-components';
import Container from '../api/Container';

const ButtonLink = (props) => (
  <Link href={props.href}>
    <Wrapper>
      {props.text}
      <Container>
        <Image
          src="/assets/arrow-right.svg"
          width={34}
          height={11}
          alt="Arrow"
        />
      </Container>
    </Wrapper>
  </Link>
);

const Wrapper = styled.a`
  & {
    font-weight: 700;
    font-size: 14px;
    color: var(--white);
    display: inline-flex;
    background-color: var(--black);
    width: auto;
    padding: 12px 22px;
    cursor: pointer;
    border-radius: 5px;
    &:hover {
      opacity: 0.95;
      transition: ease-in-out 0.25s;
    }
    img {
      margin-left: 15px;
    }
  }
  @media screen and (max-width: 1600px) {
    font-size: 16px;
  }
  @media screen and (max-width: 800px) {
    font-size: 16px;
    padding: 10px 15px;
  }
`;

export default ButtonLink;
