import styled from 'styled-components'

export const Wrapper = styled.section`
  width: 100%;
  padding: 3rem 10rem;  

  h2 {
    font-size: 3rem; 
  }

  p {
    margin-top: 2rem; 
    font-size: 1.5rem;
  } 

  div {
    padding: 2rem 0;
    gap: 1rem; 
    display: flex;
    flex-direction: column;

    span {
      font-size: 1.5rem;
      
      svg {
        transform: translateY(.5rem);
        margin-right: 1rem; 

        &:hover {
          filter: brightness(0.9);
        }
      } 
    }
  }

  @media (max-width: 1024px) {
    padding: 3rem 5rem;
  }

  @media (max-width: 500px) {
    padding: 2.5rem;

    h2 {
      font-size: 2.5rem;
    }

    p {
      font-size: 1.25rem;
    }

    div {
      span {
        font-size: 1.25rem;
      }
    }
  }
`
