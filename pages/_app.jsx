import { createGlobalStyle } from 'styled-components';
// eslint-disable-next-line no-unused-vars
import globalsStyles from '../styles/globals.css';

export default function App({ Component, pageProps }) {
  return (
    <>
      <GlobalStyle />
      <Component {...pageProps} />
    </>
  );
}

const GlobalStyle = createGlobalStyle`
:root {
  --black: #212121;
  --white: #eee;
  --yellowGrad: linear-gradient(-45deg, #ffff00, #ffc700);
  --blackShadow: 1px 0 10px #000;
  --grey: #ddd;
  --transition: 0.25s;
}

* {
  font-display: swap;
  margin: 0;
  padding: 0;
  font-family: 'Montserrat', sans-serif;
  line-height: 150%;
}
/*from A to Z*/
a {
  color: var(--black);
  text-decoration: none;
}

.col-2 {
  width: calc(50% - 20px);
}

.col-3 {
  width: calc(100% / 3 - 80px / 3);
}
.col-4 {
  width: calc(25% - 30px);
}

.flex {
  display: flex;
  gap: 40px;
  flex-wrap: wrap;
}

.noLS {
  list-style: none;
}

.wrapper {
  width: 1530px;
  margin: 0 auto;
  position: relative;
}

@media screen and (max-width: 1600px) {
  .wrapper {
    width: 1200px;
    margin: 0 auto;
    position: relative;
  }
}

@media screen and (max-width: 1280px) {
  .col-4 {
    width: calc(50% - 20px);
  }
  .wrapper {
    width: 960px;
  }
}

@media screen and (max-width: 980px) {
  .flex {
    gap: 20px;
  }
  .col-2 {
    width: 100%;
  }
  .col-3 {
    width: 100%;
  }
  .col-4 {
    width: 100%;
  }
  .wrapper {
    width: 85%;
    padding: 0 7.5%;
  }
}
`;
