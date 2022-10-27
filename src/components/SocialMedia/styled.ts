import styled, { css, DefaultTheme } from 'styled-components'
import media from 'styled-media-query'

type SocialMediaStyle = {
  status: 'active' | 'disabled';
}

export const Wrapper = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 4rem;
  align-items: center;
  justify-content: center;
  flex: 1;
  
`

const itemModifiers = {
  ['active']: (theme: DefaultTheme) => css`
    background-color: #a578eb;
    color: ${theme.colors.white};
    cursor: pointer;
    &:hover {
      background-color: #a578eb;
      color: ${theme.colors.white};
      font-weight: ${theme.font.bold};
    }
  `,
  ['disabled']: (theme: DefaultTheme) => css`
    background-color: ${theme.colors.none};
    border: 2.5px dashed #a578eb;
    color: #a578eb;
    cursor: not-allowed;
    &:hover {
      background-color: transparent;
      border: 2.5px dashed #a578eb;
      color: #a578eb;
    }
  `
}

export const Item = styled.a<SocialMediaStyle>`
  ${({ theme, status }) => css`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 1rem;
    border-radius: 1rem;
    padding: 2rem 0;
    width: 60%;
    font-size: 1.6rem;
    box-shadow: 0 0 1.5rem 0 rgba(0,0,0,0.1);
    ${itemModifiers[status](theme)}
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
