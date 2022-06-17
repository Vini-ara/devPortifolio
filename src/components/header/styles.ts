import styled, { css } from 'styled-components';

interface HeaderWrapperProps {
  isVisible: boolean;
}

interface HeaderModalProps {
  isActive: boolean;
}

export const HeaderWrapper = styled.header<HeaderWrapperProps>`
  width: 100%;
  padding: 0 10rem;  
  display: flex; 
  align-items: center;
  justify-content: space-between; 
  height: 5rem;
  background: ${props => props.theme.bg};

  position: fixed;
  top: 0; 
  max-height: ${props => props.isVisible ? '5rem' : '0'};
  overflow: hidden;

  transition: max-height .3s ease;

  z-index: 1; 

  color: ${props => props.theme.text};

  h1 {
    font-size: 2.25rem;
  }

  div {
    display: flex;

    svg {
      color: ${props => props.theme.text};
      display: none;
      width: 0; height: 0; 
      visibility: hidden; 
      opacity: 0;

      &:hover {
        color: ${props => props.theme.high_text} 
      }
    }
  }

  nav {
    a {
      font-size: 1.5rem;  
      margin-left: 1rem;    
      cursor: pointer;
      text-decoration: none;
      color: ${props => props.theme.text};

      &:hover {
        color: ${props => props.theme.high_text} 
      }
    }
  }

  @media (max-width: 1024px) {
    padding: 0 5rem; 
  }

  @media (max-width: 768px) {
    nav {
      display: none;
      width: 0; height: 0; 
      visibility: hidden; 
    }

    div {
      svg {
        display: block;
        width: 2rem; height: 2rem; 
        visibility: visible; 
        opacity: 1;
      }
    }
  }

  @media (max-width: 650px) {
    h1 {
      font-size: 1.75rem;
    }

    nav {
      a {
        font-size: 1.25rem;
        margin-left: .4rem;
      }
    }
  }

  @media (max-width: 500px) {
    padding: 0 2.5rem;

    h1 {
      font-size: 1.5rem;
    }
  }
`
export const HeaderModal = styled.div<HeaderModalProps>`
  position: fixed;
  top: 0;
  left: 0;

  ${props => props.isActive ? css`
    display: flex; 
    visibility: visible;
    opacity: 1;
    z-index: 99;
    height: 100vh; width: 100vw;  
  ` : css`
    display: none; 
    visibility: hidden;
    opacity: 0;
    z-index: -99;
    height: 0; width: 0;  
  `}

  background: ${props => props.theme.bg};

  svg {
    position: fixed;
    top: 1.5rem;
    right: 2.5rem;
  }

  nav {
    width: 100%; height: fit-content; 
    visibility: visible; 
    margin-top: 20vh;

    display: flex;
    flex-direction: column;
    align-items: center;

    gap: 2rem;

    a {
      font-size: 2rem;  
      margin-left: 1rem;    
      cursor: pointer;
      text-decoration: none;
      color: ${props => props.theme.text};

      &:hover {
        color: ${props => props.theme.high_text} 
      }
    }
  }
`
