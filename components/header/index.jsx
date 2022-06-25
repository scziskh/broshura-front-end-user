import styled from 'styled-components';
import Logo from '../logo';
import HeaderNav from './nav';

const Header = () => (
  <Wrapper>
    <div className="wrapper">
      <Logo />
      <HeaderNav />
    </div>
  </Wrapper>
);

const Wrapper = styled.header`
  & {
    display: flex;
    width: 100%;
    background-color: var(--black);
    display: inline-block;
  }
`;

export default Header;
