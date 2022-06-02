import styled from 'styled-components';

export const Wrapper = styled.section`
  height: calc(100vh - 5rem); 
  padding: 3rem 10rem; 
  
  background: ${props => props.theme.main_bg2};
  color: ${props => props.theme.main_bg};

  h2 {
    font-size: 3rem; 
  }
`

export const WindowCard = styled.div`
  height: 27.5rem; 
  width: 50%;

  margin-top: 8rem; 

  border: 8px ${props => props.theme.main_bg} solid;
  border-radius: 1.5rem; 

  overflow-y: scroll;
  img {
    width: 100%; 

  }

  &::-webkit-scrollbar {
    width: 0px; 
  }
`

export const WindowCardHeader = styled.div`
  height: 2.25rem; 
  width: 100%;
  
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
