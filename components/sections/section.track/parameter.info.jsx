import styled from 'styled-components';

const ParameterInfo = props => {
  return (
    <Wrapper>
      <strong>{`${props.name}:`}</strong> {props.value}
    </Wrapper>
  );
};

const Wrapper = styled.section`
  padding: 4px 0;
`;

export default ParameterInfo;
