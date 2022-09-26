import { createGlobalStyle, css } from "styled-components";

const GlobalStyles = createGlobalStyle`
  ${({ theme }) => css`
    ::-webkit-scrollbar-track {
      background-color: ${theme.colors.none};
    }
    ::-webkit-scrollbar {
      width: 0.8rem;
      height: 0.8rem;
      background-color: ${theme.colors.none};
    }
    ::-webkit-scrollbar-thumb {
      border-radius: 5rem;
      background-color: ${theme.colors.primary};
      opacity: 0.9;
    }
    * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;
      &::before,
      &::after {
        box-sizing: inherit;
      }
    }
    html {
      font-size: 62.5%;
    }
    html,
    body,
    #__next {
      height: 100%;
    }
    a {
      text-decoration: none;
      color: ${theme.colors.secondary};
    }
    li {
      list-style: none;
    }
    em {
      font-style: normal;
    }
    body {
      /* background-color: ${theme.colors.background}; */
      background-color: #EBEEF1;
      font-size: ${theme.font.sizes.s16};
      color: ${theme.colors.secondary};
      font-weight: ${theme.font.normal};
      font-family: ${theme.font.family.roboto};
      font-style: normal;
      font-display: swap;
      overflow-x: hidden;
    }
  `}
`;
export default GlobalStyles;