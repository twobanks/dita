import styled, { css } from "styled-components";
import media from 'styled-media-query'

export const Header = styled.header``

export const DitaWrapper = styled.div`
  ${({ theme }) => css`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 6rem;
  height: 6rem;
  padding: 0;
  border-radius: ${theme.radius};
  overflow: hidden;
  border: .3rem solid ${theme.colors.white};
  box-shadow: 0 .8rem 1rem -.4rem rgba(${theme.colors.shadow}, 0.2);
  transform-origin: center center;
  transition: 0.15s ease;
  cursor: pointer;
  &:hover,
  &:focus {
    transform: translateY(-0.4rem);
    box-shadow: 0 1.2rem 1.4rem -.4rem rgba(${theme.colors.shadow}, 0.3);
  }
  `}
  
`

export const Info = styled.div`

`