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

export const Item = styled.li`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    border: 2px solid ${theme.colors.shadow};
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
      bottom: -9px;
      left: calc(50% - 47.5%);
      border-radius: ${theme.radius};
      border: 2px solid ${theme.colors.shadow};
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
    display: flex;
    width: 50px;
    height: 50px;
    flex-shrink: 0;
    background-color: #fff1a9;
    border-radius: calc(${theme.radius} / 2);
    padding: 1rem;
    margin-left: 2rem;
   
  `}
`

export const Detail = styled.div`
width: 12px;
	height: 12px;
	background-color: #1d1d1d;
	position: absolute;
	top: 20px;
	left: calc(50% - 6px);
	border-radius: 50%;
	box-shadow: 0 0 0 2px #fff, 0 0 0 3px #1d1d1d;
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
		width: 12px;
		height: 12px;
		background-color: #1d1d1d;
		border-radius: 50%;
		left: calc(50% - 6px);
		top: -35px;
	}

	&:after {
		width: 6px;
		background-color: #fff;
		border: 1px solid;
		border-radius: 99em;
		height: 40px;
		left: calc(50% - 3px);
		bottom: 3px;
	}

	box-shadow: none;
		&:nth-of-type(odd) {
			left: 10px;
			top: 10px;
			transform: rotate(-45deg);
		}

		&:nth-of-type(even) {
			left: calc(100% - 20px);
			top: calc(100% - 20px);
			transform: rotate(120deg);
		}
`