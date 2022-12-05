import styled from 'styled-components';
import { phoneFormatter } from '../../../helpers/formatters/phone-formatter';

const Contacts = (props) => {
  const { text } = props;

  return (
    <Wrapper className="col-2">
      <h3>{text?.contacts_header}</h3>
      <ul>
        <Mail>
          <a href={`mailto:${text?.email}`}>{text?.email}</a>
        </Mail>
        <Phone>
          <a href={`tel:${text?.phone}`}>{phoneFormatter(text?.phone)}</a>
        </Phone>
        <Location>
          <a href="">{text?.address}</a>
        </Location>
      </ul>
      <h3>{text?.schedule_header}</h3>
      <ul>
        <WorkDays>{text?.working_days}</WorkDays>
        <WorkHours>{text?.working_hours}</WorkHours>
      </ul>
    </Wrapper>
  );
};

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
