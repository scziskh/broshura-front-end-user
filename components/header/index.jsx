import styled from 'styled-components';
import Logo from '../logo';
import HeaderNav from './nav';

const Header = (props) => (
  <Wrapper>
    <div className="wrapper">
      <Logo />
      <HeaderNav text={props.text} />
    </div>
  </Wrapper>
);

const Wrapper = styled.header`
  & {
    display: flex;
    width: 100%;
    background-color: var(--black);
  }
`;

export default Header;
