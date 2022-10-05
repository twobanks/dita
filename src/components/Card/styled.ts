import styled, { css } from "styled-components";
import media from 'styled-media-query'

export const Wrapper = styled.div`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0 auto;
    background-color: ${theme.colors.white};
    width: 60%;
    padding: 10px;
    border-radius: 10px;
    box-shadow: 0 0 1.5rem 0 rgba(0,0,0,0.1);
    border-radius: 1rem;
    padding: 2rem 0;
    ${media.lessThan('medium')`
      width: 100%;
    `}
  `}
`;