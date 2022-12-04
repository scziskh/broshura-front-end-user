import Image from 'next/image';
import styled from 'styled-components';
import Container from '../api/Container';

const ButtonDefault = (props) => (
  <Wrapper type={props.type}>
    {props.text}
    <Container>
      <Image src="/assets/arrow-right.svg" width={34} height={11} alt="Arrow" />
    </Container>
  </Wrapper>
);

const Wrapper = styled.button`
  & {
    font-weight: 700;
    font-size: 14px;
    color: var(--white);
    background-color: var(--black);
    width: auto;
    padding: 12px 22px;
    cursor: pointer;
    border: none;
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

export default ButtonDefault;
