import Document, { Head, Html, Main, NextScript } from "next/document";

class MyDocument extends Document {
  render() {
    return (
      <Html lang="az">
        <Head>
          <link rel="icon" href="/static/favicon.ico" />
          <link rel="stylesheet" type="text/css" href="/nprogress.css" />
          <meta charSet="utf-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=5.0, minimum-scale=1" />
          <meta name="keywords" content="foglie" />
          <link
            href="https://fonts.googleapis.com/css?family=Libre+Baskerville|Sarabun:300,400,500|Roboto:500&display=swap&subset=latin-ext"
            rel="stylesheet"
          />
          {/* <link href="https://api.mapbox.com/mapbox-gl-js/v0.51.0/mapbox-gl.css" rel="stylesheet" /> */}
          <link
            rel="stylesheet"
            href="https://unpkg.com/leaflet@1.9.2/dist/leaflet.css"
            integrity="sha256-sA+zWATbFveLLNqWO2gtiw3HL/lh1giY/Inf1BJ0z14="
            crossOrigin=""
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
