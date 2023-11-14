"use client";

import { Global, css } from "@emotion/react";

const styles = css`
  html {
  }
  body {
    margin: 0;
    padding: 0;
  }
`;

const GlobalStyle = () => <Global styles={styles} />;

export default GlobalStyle;
