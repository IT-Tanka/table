import { Html, Head, Main, NextScript } from 'next/document';

const MyDocument = () => {
  return (
    <Html lang="en">
      <Head>
      <link
            rel="stylesheet"
            href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;600&display=swap"
          />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
};

export default MyDocument;
