import styled from 'styled-components';

const ErrorSection = (props) => {
  const { err } = props;

  return (
    <Wrapper>
      <h1>{err?.name}</h1>
      <p>{err?.description}</p>
    </Wrapper>
  );
};

const Wrapper = styled.section``;

export default ErrorSection;
