import styled, { css } from "styled-components";

export const Wrapper = styled.main`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    max-width: ${theme.container};
    width: 100%;
    height: 100%;
    margin: 0 auto;
    padding: 2rem;
    hr {
      width: 100%;
      height: .1rem;
      background-color: ${theme.colors.red};
      border: 0;
      outline: none;
    }
  `}
`