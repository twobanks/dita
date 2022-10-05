import styled, { css } from "styled-components";
import media from 'styled-media-query'

type DitaStyle = {
  image: string;
}

export const Header = styled.header`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 2rem;
  ul {
    display: flex;
    gap: 1.5rem;
    li {
      height: 2.75rem;
      width: 2.75rem;
      img {
        height: 100%;
        width: 100%;
      }
    }
  }
`

export const DitaWrapper = styled.div<DitaStyle>`
  ${({ theme, image }) => css`
    height: 20rem;
    width: 20rem;
    background-image: url(${image});
    background-position: center;
    background-size: 100%;
    animation: morph 8s ease-in-out infinite;
    border-radius: 60% 40% 30% 70% / 60% 30% 70% 40%;
    box-shadow: 0 0.188rem 0.375rem #8d9798;
    transition: all 1s ease-in-out;
    @keyframes morph {
      0% {
        border-radius: 60% 40% 30% 70% / 60% 30% 70% 40%;
      }
      50% {
        border-radius: 30% 60% 70% 40% / 50% 60% 30% 60%;
      }
      100% {
        border-radius: 60% 40% 30% 70% / 60% 30% 70% 40%;
      }
    }
  `}
  
`

export const Content = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    color: ${theme.colors.shadow};
    h2 {
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 10px;
      font-size: 30px;
      margin-bottom: 1rem;
      img {
        height: 30px;
        width: 30px;
      }
    }
    p, strong {
      line-height: 22px;
    }
  `}
`