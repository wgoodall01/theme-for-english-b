import * as React from "react";
import App from "next/app";
import Head from "next/head";

const rootStyles = `

body {
  font-family: "Alegreya", "Charter", serif;
  font-size: 17px;
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  background-color: var(--color-shade);
}

h1, h2, h3, h4, h5, h6 {
  margin: 0;
}

* {
  box-sizing: inherit; 
}

:root {
  --color-shade: rgb(235, 235, 235);
}

`;

export default class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props;

    return (
      <>
        <Head>
          <title>Theme for English B</title>
          <link
            href="https://fonts.googleapis.com/css?family=Alegreya&display=swap"
            rel="stylesheet"
          />
          <style>{rootStyles}</style>
          <meta name="viewport" content="width=device-width, initial-scale=1" />
        </Head>
        <Component {...pageProps} />

        {/* Include Genius annotation support */}
        <script src="https://genius.codes" />
      </>
    );
  }
}
