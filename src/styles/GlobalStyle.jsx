import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
  }
  
  body {
    margin: 0;
    display: flex;
    place-items: center;
    min-width: 320px;
    min-height: 100vh;
  }

  #root {
    max-width: 1280px;
    width: 100%;
    margin: 0 auto;
    text-align: center;
  }
`;

export default GlobalStyle;
