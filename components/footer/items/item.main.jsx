import styled from 'styled-components';
import FooterMainSingleItem from './single-item.main';

const FooterMainItem = (props) => {
  const { group, text } = props;

  const items = group.map((item, index) => (
    <FooterMainSingleItem
      key={index}
      href={item.href}
      name={text?.[item.name]}
    />
  ));
  return (
    <Wrapper className="col-4">
      <ul className="noLS">{items}</ul>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  li:first-child {
    font-weight: bold;
  }
`;

export default FooterMainItem;
