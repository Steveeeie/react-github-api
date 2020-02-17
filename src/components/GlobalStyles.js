import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
    *{
        border: 0;
        box-sizing: border-box;
        color: inherit;
        font: inherit;
        margin: 0;
        padding: 0;
        -moz-osx-font-smoothing: grayscale;
        -webkit-font-smoothing: antialiased;
    }

    html{
        font-size: 16px;
    }

    body{
        background-color: ${({ theme }) => theme.colors.dark};
        font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
    }
`;

export default GlobalStyles;
