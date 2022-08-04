import styled, { css } from 'styled-components'
import media from 'styled-media-query'

export const WrapperSocialNetworks = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 4rem;
  align-items: center;
  justify-content: center;
  height: 100%;
`

export const SocialNetworks = styled.li`
  ${({ theme }) => css`
    cursor: pointer;
    padding: 1rem;
    border-radius: .8rem;
    background-color: ${theme.colors.white};
    border: solid .2rem ${theme.colors.shadow};
    box-shadow: .4rem .4rem 0 0 ${theme.colors.shadow};
    width: 60%;
    ${media.lessThan('medium')`
      width: 100%;
    `}
  `}
`

export const Item = styled.a`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    border: .2rem solid ${theme.colors.shadow};
    border-radius: ${theme.radius};
    padding: 1rem;
    background-color: ${theme.colors.white};
    position: relative;
    width: 95%;
    color: ${theme.colors.shadow};
    cursor: pointer;
    &:after {
      content: "";
      display: block;
      position: absolute;
      z-index: -1;
      width: 95%;
      height: 100%;
      bottom: -.9rem;
      left: calc(50% - 47.5%);
      border-radius: ${theme.radius};
      border: .2rem solid ${theme.colors.shadow};
      background-color: ${theme.colors.pink};
    }
  `}
`

export const Content = styled.div`
  display: flex;
  gap: 2rem;
  align-items: center;
  
`

export const ImageWrapper = styled.div`
  ${({ theme }) => css`
    position: relative;
    width: 5rem;
    height: 5rem;
    background-color: #fff1a9;
    border-radius: calc(${theme.radius} / 2);
    margin-left: 2rem;
  `}
`

export const Detail = styled.div`
  ${({ theme }) => css`
    width: 1.2rem;
    height: 1.2rem;
    background-color: #1d1d1d;
    position: absolute;
    top: 2rem;
    left: calc(50% - .6rem);
    border-radius: 50%;
    box-shadow: 0 0 0 .2rem ${theme.colors.white}, 0 0 0 .3rem #1d1d1d;
    transform: rotate(3deg);
    z-index: 1;
    &:before,
    &:after {
      content: "";
      display: block;
      border-radius: 50%;
      position: absolute;
      transition: 0.15s ease-out;
    }
    &:before {
      width: 1.2rem;
      height: 1.2rem;
      background-color: #1d1d1d;
      border-radius: 50%;
      left: calc(50% - .6rem);
      top: -3.5rem;
    }

    &:after {
      width: .6rem;
      background-color: ${theme.colors.white};
      border: .1 solid;
      border-radius: 99em;
      height: 4rem;
      left: calc(50% - .3rem);
      bottom: .3rem;
    }

    box-shadow: none;
    &:nth-of-type(odd) {
      left: 1rem;
      top: 1rem;
      transform: rotate(-45deg);
    }

    &:nth-of-type(even) {
      left: calc(100% - 2rem);
      top: calc(100% - 2rem);
      transform: rotate(120deg);
    }
  `}
`

export const Description = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    gap: 1rem;
    width: 95%;
    border: .2rem solid ${theme.colors.shadow};
    background-color: ${theme.colors.white};
    padding: 2rem;
    font-size: ${theme.font.sizes.s16};
    border-radius: ${theme.radius};
    box-shadow: .4rem .4rem 0 0 ${theme.colors.shadow};
    h2 {
      align-self: flex-start;
      font-family: ${theme.font.family.caveat};
      font-size: ${theme.font.sizes.s36};
      color: ${theme.colors.pink};
      ${media.lessThan('medium')`
        align-self: center;
      `}
    }
  `}
`