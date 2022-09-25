import styled from 'styled-components';
import Contacts from './contacts';
import Form from './form';

const ContactsSection = () => {
  return (
    <Wrapper className="wrapper flex">
      <Form />
      <Contacts />
    </Wrapper>
  );
};

const Wrapper = styled.section`
  padding-bottom: 64px;
  gap: 40px;
  flex-wrap: wrap-reverse;
  h3 {
    padding: 10px 0 5px;
  }
`;

export default ContactsSection;
