import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import styled, { createGlobalStyle } from 'styled-components';

import Header from './components/header';
import IndexPage from './pages/indexPage';
import Footer from './components/footer';

const App = () => (
  <div className="App">
    <GlobalStyles />
    <Router>
      <Header />
      <Content>
        <Routes>
          <Route exact path="/" element={<IndexPage />} />
        </Routes>
      </Content>
      <Footer />
    </Router>
  </div>
);

const GlobalStyles = createGlobalStyle`
  :root {
    --black: #212121;
    --white: #eee;
    --yellowGrad: linear-gradient(-45deg, #ffff00, #ffc700);
    --blackShadow: 1px 0 10px #000;

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
