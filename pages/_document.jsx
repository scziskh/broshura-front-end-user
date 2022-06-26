import { Html, Head, Main, NextScript } from 'next/document';
import Script from 'next/script';

const Document = (props) => {
  return (
    <Html>
      <Head>
        <Script
          src="https://fonts.googleapis.com/css2?family=Montserrat&display=swap"
          rel="stylesheet"
        />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
};

export default Document;
