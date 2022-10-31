import styled from 'styled-components';

const ErrorSection = ({ err }) => {
  return (
    <Wrapper>
      <h1>{err}</h1>
      <p>{err}</p>
    </Wrapper>
  );
};

const Wrapper = styled.section``;

export default ErrorSection;
