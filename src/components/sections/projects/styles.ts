import styled, { keyframes, StyledComponent } from 'styled-components';

interface InfoProps {
  isEven?: boolean;
}

export const Wrapper = styled.section`
  padding: 3rem 10rem; 
  
  background: ${props => props.theme.main_bg2};
  color: ${props => props.theme.main_bg};
  perspective: 10000px; 

  h2 {
    font-size: 3rem; 
  }

  @media (max-width: 1024px) {
    padding: 3rem 5rem; 
  }
`

export const Content = styled.div`
  display: flex;
  width: 100%;

  padding-top: 5rem;

  @media (max-width: 1000px) {
    flex-direction: column;
  }
`

export const WindowCard = styled.div`
  position: relative;
  width: 50%;

  border: 8px ${props => props.theme.main_bg} solid;
  border-radius: 1.5rem; 
  overflow-y: hidden;

  margin: 0 auto;

  @media (max-width: 1000px) {
    width: 80%;
    margin-top: 2rem; 
  }

`

export const WindowCardHeader = styled.div`
  height: 2.25rem; 
  width: 100%;
  z-index: 2;

  border-radius: 1.5rem 1.5rem 0 0;
  
  position: absolute; 
  top: 0; 
  
  display: flex; 
  align-items: center;
  justify-content: center;
  background: ${props => props.theme.main_bg2};

  p {
    font-size: 1.25rem; 
  }

  .windowController {
    position: absolute; 
    left: 0; 
    top: 0; 

    height: 100%;

    display: flex; 
    align-items: center; 

    div {
      height: .75rem; 
      width: .75rem; 

      margin-left: .5rem; 
      border-radius: 50%; 
      background: red; 

      &.yellow {
        background: #FFBD2D;
      }

      &.green {
        background: #29C841; 
        cursor: pointer; 
      }
    }
  }

  border-bottom: 5px ${props => props.theme.main_bg} solid;
`

export const WindowImgContainer = styled.div`
  width: 100%;
  margin-top: 2.25rem; 
  aspect-ratio: 16/9;
  overflow-y: scroll;

  &::-webkit-scrollbar {
   width: 5px; 
    background-color: ${props => props.theme.main_bg};
  }

  &::-webkit-scrollbar-thumb {
    border-radius: 1rem;
    background-color: ${props => props.theme.high_text};
  }

  img {
    min-height: 100%;
    width: 100%; 
    object-fit: cover;
  }
`

export const Info = styled.div<InfoProps>`
  margin-left: ${props => props.isEven ? '0' : '3.25rem'};
  margin-right: ${props => props.isEven ? '3.25rem' : '0'};
  flex: 1; 

  h3 {
    font-size: 3.25rem;
  }

  p {
    font-size: 1.5rem; 
    margin-top: 1.5rem; 
  }
`

export const Links = styled.div`
  margin-top: 1rem; 

  button {
    width: fit-content; 
    height: fit-content;
    padding: .25rem 1rem;
    outline: none; 
    border: none; 

    background: ${props => props.theme.main_bg2};

    border: 3px solid ${props => props.theme.main_bg};

    transition: all .3s; 


    &:hover {
      background: ${props => props.theme.main_bg};

      a {
        color: ${props => props.theme.text}; 
      }
    }
    
    & + button {
      margin-left: 1rem; 
    }
  }

  a {
    color: ${props => props.theme.main_bg}; 
    
    font-size: 1.25rem; 
    text-decoration: none; 
    width: 100%;
    heigth: 100%; 

  }
`
