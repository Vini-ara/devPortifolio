import styled from 'styled-components';

interface InfoProps {
  isEven?: boolean;
}

interface ContentProps {
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

  @media (max-width: 500px) {
    padding: 2.5rem;

    h2 {
      font-size: 2.5rem;
    }
  }
`

export const Content = styled.div<ContentProps>`
  display: flex;
  width: 100%;

  margin-top: 7rem;

  @media (max-width: 1000px) {
    flex-direction: ${props => props.isEven ? 'column-reverse' : 'column'};
    gap: 1.5rem;
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
  }

  @media (max-width: 650px) {
    width: 100%;
  }

  @media (max-width: 500px) {
    border: 6px ${props => props.theme.main_bg} solid;
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

  border-bottom: 5px ${props => props.theme.main_bg} solid;

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
      }
    }
  }

  @media (max-width: 500px) {
    height: 1.75rem; 
    border-bottom: 3px ${props => props.theme.main_bg} solid;

    p {
      font-size: 1.15rem;
    }

    .windowController {
        margin-left: .25rem;
        div {
          height: .5rem;
          width: .5rem;
          margin-left: .25rem;
        }
    }
  }
`

export const WindowImgContainer = styled.div`
  width: 100%;
  margin-top: 2.25rem; 
  aspect-ratio: 16/9;
  overflow-y: scroll;

  &::-webkit-scrollbar {
   width: 0px; 
  }

  img {
    min-height: 100%;
    width: 100%; 
    object-fit: cover;
  }

  @media (max-width: 500px) {
    margin-top: 1.75rem;
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

  @media (max-width: 1000px) {
    margin: 0; 
  }

  @media (max-width: 500px) {
    h3 {
      font-size: 2.5rem;
    }

    p {
      font-size: 1.25rem;   
    }
  }
`

export const Links = styled.div`
  margin-top: 1rem; 

  button {
    width: fit-content; 
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
    display: block;
    color: ${props => props.theme.main_bg}; 
    padding: .25rem 1rem;
    
    font-size: 1.25rem; 
    text-decoration: none; 
  }

  @media (max-width: 500px) {
    button {
      padding: .2rem .75rem;
    }
  }
`
