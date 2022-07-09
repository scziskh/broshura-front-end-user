import styled from 'styled-components';

const BreadcrumbsSection = props => {
  return (
    <Wrapper className="header">
      <div className="wrapper">
        <h2>Наши услуги</h2>
        <div className="breadcrumbs">
          <a href="">Главная</a> / <a href="">Услуги</a>
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section``;

export default BreadcrumbsSection;
