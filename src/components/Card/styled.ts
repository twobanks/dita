import styled, { css } from "styled-components";
import media from 'styled-media-query'

export const Wrapper = styled.div`
  ${({ theme }) => css`
    display: flex;
    margin: 0 auto;
    background-color: ${theme.colors.white};
    width: 60%;
    border-radius: 10px;
    box-shadow: 0 0 1.5rem 0 rgba(0,0,0,0.1);
    border-radius: 1rem;
    img { 
      border-radius: 1rem 0 0rem 1rem;
    }
    ${media.lessThan('medium')`
      width: 100%;
    `}
  `}
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  flex: 1;
  padding: 2rem;
  button {
    align-self: flex-end;
    justify-content: flex-end;
    background-color: #a578eb;
    border: 0;
    outline: none;
    color: white;
    font-size: 14px;
    padding: 4px 10px;
    border-radius: 6px;
    cursor: pointer;
  }
`

export const Infos = styled.div`
  padding: 1rem 0;
 
`

export const Title = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  h3 {
    font-size: 18px;
    color: black;
  }
  strong {
    font-size: 14px;
    color: #3e9c35;
    font-weight: bold;
  }
`