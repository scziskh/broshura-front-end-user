import Link from 'next/dist/client/link';
import styled from 'styled-components';

const MenuItem = (props) => {
  return (
    <Wrapper $tempBordered={props.bordered}>
      <Link href={props.href}>
        <a>{props.name}</a>
      </Link>
    </Wrapper>
  );
};

const Wrapper = styled.li`
  & {
    display: flex;
    justify-content: center;
    color: var(--white);
    &:nth-last-child(-n + 1):after {
      display: none;
    }
    a {
      display: inline-block;
      color: var(--white);
      padding: ${(props) => (props.$tempBordered ? '10px' : '0')};
      border: ${(props) =>
        props.$tempBordered ? '1px solid var(--white)' : 'none'};
      margin: ${(props) => (props.$tempBordered ? '-10px 0 0' : '0')};
      &::after {
        content: '';
        display: ${(props) => (props.$tempBordered ? 'none' : 'block')};
        height: 2px;
        margin-top: 7px;
        background: var(--yellowGrad);
        width: 100%;
        transform: translateY(5px);
        opacity: 0;
        transition: transform var(--transition);
      }
      &:hover {
        background-color: ${(props) =>
          props.$tempBordered ? 'var(--white)' : 'none'};
        color: ${(props) => (props.$tempBordered ? 'var(--black)' : 'none')};
        transition-duration: var(--transition);
        &:after {
          transform: translateY(-5px);
          opacity: 1;
        }
      }
    }
  }
  @media screen and (max-width: 980px) {
    & {
      a {
        margin: 0;
        &::after {
          height: 1px;
        }
      }
    }
  }
`;

export default MenuItem;
