import styled from 'styled-components';
import { contacts } from '../../helpers/builders/contacts';

const Contacts = () => (
  <Wrapper className="col-2">
    <h3>Контакты:</h3>
    <ul>
      <Mail>
        <a href={`mailto:${contacts.email}`}>{contacts.email}</a>
      </Mail>
      <Phone>
        <a href={`tel:${contacts.phone}`}>{contacts.phone}</a>
      </Phone>
      <Location>
        <a href="">{contacts.address}</a>
      </Location>
    </ul>
    <h3>График работы:</h3>
    <ul>
      <WorkDays>{contacts.work_days}</WorkDays>
      <WorkHours>{contacts.work_hours}</WorkHours>
    </ul>
  </Wrapper>
);

const Wrapper = styled.div`
  box-sizing: border-box;
  padding-left: 100px;
  @media screen and (max-width: 980px) {
    padding-left: 0;
  }
  li {
    margin-left: -16px;
    list-style: none;
    display: flex;
    align-items: center;
    padding: 14px 0;
  }
  li::before {
    margin-right: 10px;
    border: 1px solid var(--grey);
    border-radius: 50%;
    display: inline-block;
    height: 28px;
    width: 28px;
  }
`;

const Mail = styled.li`
  ::before {
    content: url('/icons/mail.svg');
  }
`;

const Phone = styled.li`
  ::before {
    content: url('/icons/phone.svg');
  }
`;

const Location = styled.li`
  ::before {
    content: url('/icons/location.svg');
  }
`;

const WorkDays = styled.li`
  ::before {
    content: url('/icons/calendar.svg');
  }
`;

const WorkHours = styled.li`
  ::before {
    content: url('/icons/time.svg');
  }
`;

export default Contacts;
