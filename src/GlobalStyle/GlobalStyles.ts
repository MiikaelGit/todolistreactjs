import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  body, input, button, label{
    font-family: 'Open Sans', sans-serif;
    color: #293845;
  }
 
`;
