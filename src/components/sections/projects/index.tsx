import { 
  Wrapper, 
  WindowCard, 
  WindowCardHeader, 
  WindowImgContainer, 
  Info, 
  Content, 
  Links } from './styles';

import pokedexImg from '../../../assets/listScreenshot.jpg';
import matosecoImg from '../../../assets/mato-seco.jpg';
import escreveresquecerImg from  '../../../assets/escreveresqucer.jpg';
import iptrackerImg from '../../../assets/ip-tracker.jpg';

import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useEffect, useRef } from 'react';

export const Projects: React.FC = () => {
  const project1 = useRef<HTMLDivElement>(null);
  const project2 = useRef<HTMLDivElement>(null);
  const project3 = useRef<HTMLDivElement>(null);
  const project4 = useRef<HTMLDivElement>(null);

                                                                                                                                                    
  gsap.registerPlugin(ScrollTrigger)

  useEffect(() => {
    const projects = [
      project1.current,
      project2.current,
      project3.current,
      project4.current
    ]
      
    projects.forEach(project => {
      gsap.fromTo(project,{
        opacity: 0,
        rotateX: '90deg',
        translateX: '0'
      },{
        opacity: 1,
        rotateX: '0deg',
        translateX: '0',
        scrollTrigger: {
          trigger: project,
          start: "top bottom",
          end: "center center",
          scrub: true,
        } 
      })
    })
  }, []);

  return (
    <Wrapper id="projects">
      <h2>...Projects</h2>

      <Content ref={project1}>
        <WindowCard>
          <WindowCardHeader>
            <div className='windowController'>
              <div></div>
              <div className='yellow'></div>
              <div className='green'></div>
            </div>
            <p>~/Pokedexer</p>  
          </WindowCardHeader>

          <WindowImgContainer>
            <img src={pokedexImg} alt='pokedexer list page' />
          </WindowImgContainer>
        </WindowCard>

        <Info>
          <h3> Pokedexer </h3>

          <p>Check the info about any pokemon you want, with all the details necessary, evolution chains, base stats, type weaknesses and more.</p>

          <Links> 
            <button>
              <a href="https://github.com/Vini-ara/Pokedex" target="blank">Code</a>
            </button>
            <button>
              <a href="https://pokedexer.netlify.app" target="blank">Site</a>
            </button>
          </Links>
        </Info>
      </Content>

      <Content ref={project2} isEven>
        <Info isEven>
          <h3> Escrever Esquecer </h3>

          <p>Writter portifolio of the writter Victor Ribeiro-Santos, where you can find some of his creations and his art expression.</p>

          <Links> 
            <button>
              <a href="https://github.com/Vini-ara/Escrever-Esquecer" target="blank">Code</a>
            </button>
            <button>
              <a href="https://escreveresquecer.com.br/" target="blank">Site</a>
            </button>
          </Links>
        </Info>

        <WindowCard>
          <WindowCardHeader>
            <div className='windowController'>
              <div></div>
              <div className='yellow'></div>
              <div className='green'></div>
            </div>
            <p>~/EscreverEsquecer</p>  
          </WindowCardHeader>

          <WindowImgContainer style={{overflow: 'hidden'}}>
            <img src={escreveresquecerImg} alt='escrever esquecer' />
          </WindowImgContainer>
        </WindowCard>
      </Content>

      <Content ref={project3}>
        <WindowCard>
          <WindowCardHeader>
            <div className='windowController'>
              <div></div>
              <div className='yellow'></div>
              <div className='green'></div>
            </div>
            <p>~/IpTracker</p>  
          </WindowCardHeader>

          <WindowImgContainer style={{overflow: 'hidden'}}>
            <img src={iptrackerImg} alt='ip-tracker home page' />
          </WindowImgContainer>
        </WindowCard>

        <Info>
          <h3> Ip Tracker </h3>

          <p>A place to check the ip address of any web domain you want and also see the map location related to that. </p>

          <Links> 
            <button>
              <a href="https://github.com/Vini-ara/Ip-tracker" target="blank">Code</a>
            </button>
            <button>
              <a href="https://femiptracker.netlify.app" target="blank">Site</a>
            </button>
          </Links>
        </Info>
      </Content>

      <Content ref={project4} isEven>
        <Info isEven>
          <h3> Mato Seco </h3>

          <p>My own personal photografy portifolio, to save and showcase some of the bird pictures I take.</p>

          <Links> 
            <button>
              <a href="https://github.com/Vini-ara/Mato-seco-" target="blank">Code</a>
            </button>
            <button>
              <a href="https://matoseco.netlify.app" target="blank">Site</a>
            </button>
          </Links>
        </Info>

        <WindowCard>
          <WindowCardHeader>
            <div className='windowController'>
              <div></div>
              <div className='yellow'></div>
              <div className='green'></div>
            </div>
            <p>~/EscreverEsquecer</p>  
          </WindowCardHeader>

          <WindowImgContainer>
            <img src={matosecoImg} alt='mato seco website' />
          </WindowImgContainer>
        </WindowCard>
      </Content>
    </Wrapper>
)}
