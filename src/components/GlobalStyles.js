import React from "react";
import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    *,
    *::before,
    *::after 
    {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
`
const GlobalStyles = () => <GlobalStyle />

export default GlobalStyles;