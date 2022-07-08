import styled from 'styled-components';

const Advantages = (props) => {
  const advantages = props.advantages.map((element, index) => <li key={index}>{element}</li>)  
    return (
          <Wrapper>
            <ul>
              {advantages}
            </ul>
          </Wrapper>
)};

const Wrapper = styled.div`
  width: 100%;
  height: 160px;
  li {
    padding: 2px 0;
  }
  @media screen and (max-width: 1600px) {
    height: 200px;
  }
  @media screen and (max-width: 1280px) {
    height: 150px;
  }
  @media screen and (max-width: 980px) {
    height: 140px;
  }
  @media screen and (max-width: 768px) {
    & {
      height: auto;
      padding-bottom: 12px;
    }
  }
`;

export default Advantages;
