import React from 'react';

const Container = React.forwardRef(function useImage(props, ref ) {
  return <div ref={ref}>{props.children}</div>;
});

export default Container;
