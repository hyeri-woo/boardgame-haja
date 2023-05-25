import styled, { createGlobalStyle } from "styled-components";
const GlobalStyle = createGlobalStyle`
    * {
        box-sizing: border-box;
        padding: 0;
        margin: 0;
    }
    ul, li {
        list-style: none;
    }
    button {
        background: none;
        border: none;
    }
    input {
        border: none;
    }
`

export default GlobalStyle;