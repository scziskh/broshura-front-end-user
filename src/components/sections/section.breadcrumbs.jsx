import styled from 'styled-components';
import { builder } from '../helpers/builders/breadcrumbs';

const BreadcrumbsSection = props => {
  const builderBreadcrumbs = builder[props.page];

  return (
    <Wrapper className="header">
      <div className="wrapper">
        <h2>{props.page}</h2>
        <BreadCrumbs>
          <ul>
            {builderBreadcrumbs?.map((props, index) => (
              <li key={index}>
                <a href={props.href}>{props.name}</a>
              </li>
            ))}
          </ul>
        </BreadCrumbs>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  background: linear-gradient(-45deg, #ffff00, #ffc700);
  margin-bottom: 48px;
`;

const BreadCrumbs = styled.div`
  ul {
    display: flex;
    justify-content: center;
    padding-bottom: 16px;
    list-style: none;
    li::after {
      margin: 0 5px;
      content: '/';
      display: 'inline-flex';
    }
    li:nth-last-child(-n + 1):after {
      display: none;
    }
    a:hover {
      text-decoration: underline;
    }
  }
`;

export default BreadcrumbsSection;
