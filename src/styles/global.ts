import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    :root {
        color-scheme: light dark;
        color: rgba(255, 255, 255, 0.87);
        background-color: #242424;
    }

    * {
        padding: 0;
        margin: 0;
        box-sizing: border-box;
    }

    html, body, #root {
        height: 100%;
    }

    a {
        text-decoration: none;
        outline: none;
    }
`;
