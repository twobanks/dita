import styled, { css } from 'styled-components'
import media from 'styled-media-query'

export const Wrapper = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 4rem;
  align-items: center;
  justify-content: center;
  flex: 1;
  
`

export const Item = styled.a`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 1rem;
    border-radius: 1rem;
    padding: 2rem 0;
    background-color: #d3c9e3;
    width: 60%;
    color: #1a1a1e;
    cursor: pointer;
    font-size: 1.6rem;
    box-shadow: 0 0 1.5rem 0 rgba(0,0,0,0.1);
    &:hover {
      background-color: #a578eb;
      color: ${theme.colors.white};
      font-weight: ${theme.font.bold};
    }
    ${media.lessThan('medium')`
      width: 100%;
    `}
  `}
`

export const ImageWrapper = styled.div`
  ${({ theme }) => css`
    position: relative;
    width: 2rem;
    height: 2rem;
    border-radius: calc(${theme.radius} / 2);
    margin-left: 2rem;
  `}
`
