import React from 'react';
import styled from 'styled-components';

const Container = React.forwardRef(function useImage(props, ref) {
  return <Wrapper ref={ref}>{props.children}</Wrapper>;
});

const Wrapper = styled.div`
  display: inline;
`;
export default Container;
