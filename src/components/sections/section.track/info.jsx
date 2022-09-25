import styled from 'styled-components';
import ParameterInfo from './parameter.info';

const Info = props => {
  return (
    <Wrapper>
      <ParameterInfo name={`Number of order`} value={'22365-523'} />
      <ParameterInfo name={`Price`} value={'2 580,00 UAH'} />
      <ParameterInfo name={`Status`} value={'Waiting of payment'} />
      <ParameterInfo name={`Date of complete`} value={'24-02-2022'} />
      <ParameterInfo
        name={`About order`}
        value={`Формат А4 · Бумага 80г · Печать 4+4 · Сшивка на 2 скобы · 24 страницы ·
        200 шт`}
      />
    </Wrapper>
  );
};

const Wrapper = styled.section`
  box-sizing: border-box;
  padding: 12px 36px;
  background-color: var(--grey);
  border-radius: 8px;
`;

export default Info;
