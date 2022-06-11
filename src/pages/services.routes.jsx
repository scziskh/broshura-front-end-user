import React from 'react';
import styled from 'styled-components';
import { Route, Routes } from 'react-router-dom';
import SingleServicePage from './single-sevice.page';
import ServicesPage from './services.page';
import { sitemap } from '../sitemap';

const ServicesRoutes = props => {
  let currentKeys;
  let routes = [];

  sitemap.map(sitemap => {
    return (currentKeys = Object.keys(sitemap.pages.services.childs));
  });
  currentKeys.forEach((element, index) => {
    routes.push(
      <Route
        key={index}
        exact
        path={`/${element}/`}
        element={<SingleServicePage typeBinding={element} />}
      />,
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
