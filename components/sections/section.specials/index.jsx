import styled from 'styled-components';
import { builder } from '../../../helpers/builders/specials';
import SingleSpecial from './single-special';

const SpecialsSection = () => {
  const specials = builder.map((item, index) => (
    <SingleSpecial key={index} props={item} />
  ));
  return <Wrapper className="wrapper flex">{specials}</Wrapper>;
};

const Wrapper = styled.section`
  padding-bottom: 48px;
`;

export default SpecialsSection;
