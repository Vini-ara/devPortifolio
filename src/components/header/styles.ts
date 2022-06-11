import styled from 'styled-components';

export const HeaderWrapper = styled.header`
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
`
