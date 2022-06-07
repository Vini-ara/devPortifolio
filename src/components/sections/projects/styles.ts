import styled, { keyframes, StyledComponent } from 'styled-components';

interface ContentProps  {
  isEven?: boolean;
}

const rollCardIn = keyframes`
  0% {
    transform: rotateX(90deg) translateY(-10rem) rotateY(-90deg); 
  }
  100% {
    transform: rotateX(0deg) translateY(0) rotateY(0);
  }
`

export const Wrapper = styled.section`
  /* height: calc(100vh - 5rem);  */
  padding: 3rem 10rem; 
  
  background: ${props => props.theme.main_bg2};
  color: ${props => props.theme.main_bg};
  perspective: 10000px; 

  h2 {
    font-size: 3rem; 
  }
`

export const Content = styled.div<ContentProps>`
  display: flex;
  width: 100%;
  opacity: 0; 
  transform: rotateX(30deg) translateX(${props => props.isEven ? '5rem' : '-5rem'}); 
  /* animation: ${rollCardIn} 2s ease; */

  padding-top: 5rem;
`

export const WindowCard = styled.div`
  height: 27.5rem; 
  width: 50%;

  border: 8px ${props => props.theme.main_bg} solid;
  border-radius: 1.5rem; 

  overflow-y: scroll;
  img {
    min-height: 100%;
    width: 100%; 
    object-fit: cover;
  }

  &::-webkit-scrollbar {
    width: 0px; 
  }
`

export const WindowCardHeader = styled.div`
  height: 2.25rem; 
  width: 100%;
  z-index: -1;
  
  position: sticky; 
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

export const Info = styled.div`
  margin-left: 3.5rem;
  padding-right: 2rem; 
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
  a {
    outline: none; 
    border: none; 
    font-size: 1.25rem; 
    padding: .25rem 1rem;
    background: ${props => props.theme.main_bg2};
    border: 3px solid ${props => props.theme.main_bg};

    transition: all .3s; 

    color: ${props => props.theme.main_bg}; 
    text-decoration: none; 
    width: 100%;
    heigth: 100%; 

    & + a {
      margin-left: 1rem; 
    }

    &:hover {
      color: ${props => props.theme.text}; 
      background: ${props => props.theme.main_bg};
    }
  }
`
