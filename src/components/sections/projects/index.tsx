import { Wrapper, WindowCard, WindowCardHeader, Info, Content, Links } from './styles';
import pokedexImg from '../../../assets/listScreenshot.jpg';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useEffect, useRef } from 'react';



export const Projects: React.FC = () => {
  const container = useRef<HTMLDivElement>(null);
  const q = gsap.utils.selector(container)

  gsap.registerPlugin(ScrollTrigger)

  useEffect(() => {
    gsap.to(container.current, {
      scrollTrigger: {
        scrub: true
      }
    })
  }, []);

  return (
    <Wrapper>
      <h2>Projects...</h2>

      <Content ref={container}>
        <WindowCard>
          <WindowCardHeader>
            <div className='windowController'>
              <div></div>
              <div className='yellow'></div>
              <div className='green'></div>
            </div>
            <p>~/Pokedexer</p>  
          </WindowCardHeader>

          <img src={pokedexImg} alt='pokedexer list page' />
        </WindowCard>

        <Info>
          <h3> Pokedexer </h3>

          <p>Check the info about any pokemon you want, with all the details necessary, evolution chains, base stats, type weaknesses and more.</p>

          <Links> 
            <a href="https://github.com/Vini-ara/Pokedex" target="blank">Code</a>
            <a href="https://pokedexer.netlify.app" target="blank">Site</a>
          </Links>
        </Info>
      </Content>
    </Wrapper>
)}
