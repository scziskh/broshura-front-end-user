import Link from 'next/dist/client/link';
import styled from 'styled-components';

const LangItem = (props) => {
  return (
    <Wrapper $tempBordered={props.bordered}>
      <Link href={`/`} locale={props.lang}>
        <a>{props.name}</a>
      </Link>
    </Wrapper>
  );
};

const Wrapper = styled.li`
  & {
    text-align: center;
    margin-left: '5px';
    color: var(--white);
    display: inline-flex;
    &::after {
      margin: 0 5px;
      content: '|';
      display: 'inline-flex';
    }
  }
  &:nth-last-child(-n + 1):after {
    display: none;
  }
  a {
    display: inline-block;
    color: var(--white);
    &::after {
      content: '';
      display: ${(props) => (props.$tempBordered ? 'none' : 'block')};
      height: 2px;
      margin-top: 5px;
      background: var(--yellowGrad);
      width: 100%;
      transform: translateY(5px);
      opacity: 0;
      transition: transform var(--transition);
    }
    &:hover {
      transition-duration: var(--transition);
      &:after {
        transform: translateY(-5px);
        opacity: 1;
      }
    }
  }
  @media screen and (max-width: 980px) {
    & {
      display: block;
    }
  }
`;

export default LangItem;
