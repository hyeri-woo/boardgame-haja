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
        cursor: pointer;
    }
    input {
        border: none;
    }
    .a11y-hidden {
        clip: rect(1px, 1px, 1px, 1px);
        clip-path: inset(50%);
        width: 1px;
        height: 1px;
        margin: -1px;
        overflow: hidden;
        padding: 0;
        position: absolute;
    }
    .ellipsis {
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
    }
    .wrapper {
        min-height: calc(100vh - 220px);
        padding: 100px 0;
        display: flex;
        justify-content: center;
        align-items: center;
    }
`

export default GlobalStyle;