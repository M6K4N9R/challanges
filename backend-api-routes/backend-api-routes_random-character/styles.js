import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }

  body {
    margin: 0;
    // width: 100%;
    // height: 100%;
    font-family: system-ui;
  }
`;
