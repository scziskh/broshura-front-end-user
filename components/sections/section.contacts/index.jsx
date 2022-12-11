import { useRouter } from 'next/router';
import styled from 'styled-components';
import { useGetLocaleQuery } from '../../../services/redux/api/localeApi';
import Contacts from './contacts';
import Form from './form';

const ContactsSection = () => {
  const locale = useRouter().locale;
  const { data: text } = useGetLocaleQuery({ locale, part: 'contactsSection' });

  return (
    <Wrapper className="wrapper flex">
      <Form text={text} />
      <Contacts text={text} />
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
