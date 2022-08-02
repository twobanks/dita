import styled, { css } from "styled-components";
import media from 'styled-media-query'

export const Header = styled.header`
  ${({ theme }) => css`
    position: relative;
    display: flex;
    gap: 2rem;
    padding: 2rem;
    border-radius: ${theme.radius};
    background-color: ${theme.colors.white};
    border: 2px dashed ${theme.colors.shadow};
    &:after {
      content: "";
      display: block;
      position: absolute;
      z-index: -1;
      width: 95%;
      height: 100%;
      bottom: -1rem;
      left: calc(50% - 47.5%);
      border-radius: ${theme.radius};
      border: .2rem solid ${theme.colors.shadow};
      background-color: #fff1a9;
    }
    ${media.lessThan('medium')`
      margin-top: 6rem;
      flex-direction: column;
      align-items: center;
    `}
  `}
`

export const DitaWrapper = styled.div`
  ${({ theme }) => css`
    display: flex;
    position: relative;
    height: 13rem;
    width: 13rem;
    border-radius: 100%;
    overflow: hidden;
    border: 2px solid ${theme.colors.shadow};
    ${media.lessThan('medium')`
      margin-top: -8rem;
    `}
  `}
`

export const Info = styled.div`

`