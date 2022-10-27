import styled, { css } from "styled-components";

export const Wrapper = styled.main`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    gap: 50px;
    max-width: ${theme.container};
    width: 100%;
    height: auto;
    margin: 0 auto;
    padding: 5rem 2rem;
    hr {
      width: 100%;
      height: .1rem;
      background-color: ${theme.colors.red};
      border: 0;
      outline: none;
    }
  `}
`

export const Bar = styled.div`
  position: absolute;
  height: 0.25rem;
  width: 100%;
  top: 0;
  left: 0;
  background-color: #b446d7;
  box-shadow: 0 0 1.5rem 0 rgba(0,0,0,0.1);
`