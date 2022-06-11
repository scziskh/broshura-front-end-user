import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import styled, { createGlobalStyle } from 'styled-components';

import Header from './components/header';
import Footer from './components/footer';

import IndexPage from './pages/index.page';
import ServicesRoutes from './pages/services.routes';

const App = () => {
  return (
    <div className="App">
      <GlobalStyles />
      <Router>
        {/*Header with nav-menu and logo*/}
        <Header />

        {/*Content what routes*/}
        <Content>
          <Routes>
            {/*Index page content*/}
            <Route exact path="/" element={<IndexPage />} />
            <Route exact path="/services/*" element={<ServicesRoutes />} />
          </Routes>
        </Content>

        {/*Footer*/}
        <Footer />
      </Router>
    </div>
  );
};

const GlobalStyles = createGlobalStyle`
  :root {
    --black: #212121;
    --white: #eee;
    --yellowGrad: linear-gradient(-45deg, #ffff00, #ffc700);
    --blackShadow: 1px 0 10px #000;
    --grey: #ddd;

    --transition: 0.25s;
  }
  a {
    color: var(--black);
    text-decoration: none;
  }
`;

const Content = styled.div`
  & {
    flex: 1 0 auto;
  }
`;

export default App;
