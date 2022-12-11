import styled from 'styled-components';

const IndexPageInfoSection = (props) => {
  const { text } = props;

  const content = text?.subSections.map((section, index) => (
    <div key={index} className="col-2">
      {section.map((el, index) => (
        <div key={index}>
          <h3>{el.h3}</h3>
          <p>{el.p}</p>
        </div>
      ))}
    </div>
  ));

  return (
    <Wrapper>
      <div className="wrapper">
        <h2>{text?.h2}</h2>
        <div className="flex">{content}</div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  & {
    padding-bottom: 48px;
    p {
      margin-bottom: 24px;
      text-align: justify;
    }
    a {
      color: #000000;
      font-weight: 700;
    }
  }
`;

export default IndexPageInfoSection;
