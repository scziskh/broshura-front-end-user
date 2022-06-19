import React from 'react';
import styled from 'styled-components';
import { Route, Routes } from 'react-router-dom';
import SingleServicePage from './single-sevice.page';
import ServicesPage from './services.page';
import { sitemap } from '../sitemap';

const ServicesRoutes = props => {
  const singleServices = sitemap.pages.services.childs;

  const currentKeys = Object.keys(singleServices);
  const routes = currentKeys.map((element, index) => {
    return (
      <Route
        key={index}
        exact
        path={`/${element}/`}
        element={
          <SingleServicePage typeBinding={singleServices[element].type} />
        }
      />
    );
  });
  return (
    <Wrapper>
      <Routes>
        <Route exact path="/" element={<ServicesPage />} />
        {routes}
      </Routes>
    </Wrapper>
  );
};

const Wrapper = styled.section``;

export default ServicesRoutes;
