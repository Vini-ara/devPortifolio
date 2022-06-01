import styled from 'styled-components';

export const HeaderWrapper = styled.header`
  width: 100%;
  padding: 0 10rem;  
  display: flex; 
  align-items: center;
  justify-content: space-between; 
  height: 5rem;
  background: ${props => props.theme.bg};

  color: ${props => props.theme.text};

  h1 {
    font-size: 3rem;
  }

  nav {
    a {
      font-size: 1.5rem;  
      margin-left: 1rem;    
      cursor: pointer;

      &:hover {
        color: ${props => props.theme.high_text} 
      }
    }
  }
`
