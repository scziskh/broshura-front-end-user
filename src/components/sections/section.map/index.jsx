import styled from 'styled-components';

const MapSection = () => {
  return (
    <Wrapper className="wrapper">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3592.5860466409226!2d30.612988579855035!3d50.45335665990805!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40d4cff857c49d23%3A0x37d266431a5cb020!2z0YPQuy4g0JrRgNCw0LrQvtCy0YHQutCw0Y8sIDbQkCwg0JrQuNC10LIsIDAyMDAw!5e0!3m2!1sru!2sua!4v1639265571313!5m2!1sru!2sua"
        width="100%"
        height="450"
        loading="lazy"
      />
    </Wrapper>
  );
};

const Wrapper = styled.section`
  margin-bottom: 64px;
  iframe {
    border: none;
    border-radius: 8px;
  }
`;

export default MapSection;
