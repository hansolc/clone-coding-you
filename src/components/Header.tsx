/** @jsxImportSource @emotion/react */
"use client";
import { css } from "@emotion/react";

const headerStyle = css({
  width: "100%",
});

function Header() {
  return <header css={headerStyle}>hello world</header>;
  // return <header>hello world</header>;
}

export default Header;
