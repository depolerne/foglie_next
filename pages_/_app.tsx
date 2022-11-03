import "normalize.css/normalize.css";
import "../public/design/global-styles.css";
import "react-multi-carousel/lib/styles.css";
import "react-medium-image-zoom/dist/styles.css";
import "lazysizes";
import "lazysizes/plugins/parent-fit/ls.parent-fit";

// import "leaflet/dist/leaflet.css";
import { ApolloProvider } from "@apollo/react-hooks";
import App from "next/app";
import Router from "next/router";
import NProgress from "nprogress";
import React from "react";

import { WelcomeAnimation } from "../components/WelcomeAnimation";
import { isProd } from "../core/utils";
import withData from "../graphql/apollo-client";

Router.events.on("routeChangeStart", () => {
  NProgress.start();
});
Router.events.on("routeChangeComplete", () => NProgress.done());
Router.events.on("routeChangeError", () => NProgress.done());

class MyApp extends App<any> {
  render() {
    const { Component, pageProps, apollo } = this.props;
    return (
      <ApolloProvider client={apollo}>
        {isProd && <WelcomeAnimation />}
        <Component {...pageProps} />
      </ApolloProvider>
    );
  }
}

export default withData(MyApp);
