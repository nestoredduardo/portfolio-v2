import Document, { Html, Head, Main, NextScript } from 'next/document';

class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          <title>Nestor Mamani</title>
          <link rel="icon" href="/logo.svg" />

          <meta name="title" content="Nestor Mamani" />
          <meta
            name="description"
            content="Full Stack Engineer building great products that people love using."
          />

          <link rel="apple-touch-icon" href="/logo.svg" />

          <meta property="og:type" content="website" />
          <meta property="og:url" content="https://nestoredduardo.me/" />
          <meta property="og:title" content="Nestor Mamani" />
          <meta
            property="og:description"
            content="Full Stack Engineer building great products that people love using."
          />
          <meta
            property="og:image"
            content="https://nestoredduardo.me/metaImage.png"
          />

          <meta property="twitter:card" content="summary_large_image" />
          <meta property="twitter:url" content="https://nestoredduardo.me/" />
          <meta property="twitter:title" content="Nestor Mamani" />
          <meta
            property="twitter:description"
            content="Full Stack Engineer building great products that people love using."
          />
          <meta
            property="twitter:image"
            content="https://nestoredduardo.me/metaImage.png"
          />
          <meta
            name="google-site-verification"
            content="r_d0z9UvAooIVRe5ktDakJVqf8CGb9W1rweCN2WQWhM"
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
