import styled, { keyframes } from 'styled-components';

const floatingAnimation = keyframes`
  0% {
    transform: translateY(0);
  }  
  50% {
    transform: translateY(-2rem);
  }
  100% {
    transform: translateY(0);
  }
`

const popUpAnimation = keyframes`
  0% {
    opacity: 0;
    transform: translateY(3rem);
  }
  100% {
    opacity: 1;
    transform: translateY(0); 
  }
`


const dropDownAnimation = keyframes`
  0% {
    opacity: 0;
    transform: translateY(-3rem);
  }
  100% {
    opacity: 1;
    transform: translateY(0); 
  }
`

const scrollAnimation = keyframes`
  0% {
    opacity: 1;
    transform: translateY(0) translateX(50%);
  }
  100% {
    opacity: 0; 
    transform: translateY(.5rem) translateX(50%);
  }
`


export const Wrapper = styled.section`
  position: relative;
  display: flex;
  /* align-items: center;  */
  width: 100%;
  height: calc(100vh - 5rem);
  padding: 8rem 10rem; 

  img {
    width 50%; 
    height: 90%; 
    animation: ${popUpAnimation} 2s ease ,${floatingAnimation} 7s 2s ease-in-out infinite;
  }
`
export const Content = styled.div`
    width: 50%; 
    align-self: flex-start;

    animation: ${dropDownAnimation} 2s ease;

    h2 {
      font-size: 3.5rem; 
      margin-bottom: 2.5rem; 
    }

    p {
      font-size: 1.5rem; 

      & + p {
        margin-top: 1rem; 
      }
    }
`

export const ScrollDownAnimation = styled.div`
  position: absolute;
  margin: 0; 
  bottom: 1rem;
  right: 50%; 
  transform: translateX(50%);
  
  .mouse {
    position: relative;     
    height: 2.25rem;
    width: 1.5rem; 
    border-radius: .75rem; 
    border: ${props => props.theme.text} 2px solid;

    .scroll {
      position: absolute; 
      top: 20%;
      right: 50%; 
      transform: translateX(50%);

      width: 2px;
      height: 4px;
      background: ${props => props.theme.text};
      animation: ${scrollAnimation} 1s ease-in-out infinite;
    }
  } 
`

