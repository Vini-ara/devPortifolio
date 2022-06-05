import { Wrapper, WindowCard, WindowCardHeader, Info, Content, Links } from './styles';

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
    let anm = gsap.to(project1.current, {
      opacity: 1,
      rotateX: "0deg",
      translateX: '0'
    })
    let anm2 = gsap.to(project2.current, {
      opacity: 1,
      rotateX: "0deg",
      translateX: '0'
    })
    let anm3 = gsap.to(project3.current, {
      opacity: 1,
      rotateX: "0deg",
      translateX: '0',
    })
    let anm4 = gsap.to(project4.current, {
      opacity: 1,
      rotateX: "0deg",
      translateX: '0'
    })

    ScrollTrigger.create({
      trigger: project1.current,
      start: "top center",
      animation: anm
    })
    ScrollTrigger.create({
      trigger: project2.current,
      start: "top center",
      animation: anm2
    })
    ScrollTrigger.create({
      trigger: project3.current,
      start: "top center",
      animation: anm3
    })
    ScrollTrigger.create({
      trigger: project4.current,
      start: "top center",
      animation: anm4
    })
  }, []);

  return (
    <Wrapper>
      <h2>Projects...</h2>

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

      <Content ref={project2} isEven>
        <Info>
          <h3> Escrever Esquecer </h3>

          <p>Writter portifolio of the writter Victor Ribeiro-Santos, where you can find some of his creations and his art expression.</p>

          <Links> 
            <a href="https://github.com/Vini-ara/Escrever-Esquecer" target="blank">Code</a>
            <a href="https://escreveresquecer.com.br/" target="blank">Site</a>
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
          <img src={escreveresquecerImg} alt='escrever esquecer' />
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

          <img src={iptrackerImg} alt='pokedexer list page' />
        </WindowCard>

        <Info>
          <h3> Ip Tracker </h3>

          <p>A place to check the ip address of any web domain you want and also see the map location related to that. </p>

          <Links> 
            <a href="https://github.com/Vini-ara/Ip-tracker" target="blank">Code</a>
            <a href="https://femiptracker.netlify.app" target="blank">Site</a>
          </Links>
        </Info>
      </Content>

      <Content ref={project4} isEven>
        <Info>
          <h3> Mato Seco </h3>

          <p>My own personal photografy portifolio, to save and showcase some of the bird pictures I take.</p>

          <Links> 
            <a href="https://github.com/Vini-ara/Mato-seco-" target="blank">Code</a>
            <a href="https://matoseco.netlify.app" target="blank">Site</a>
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
          <img src={matosecoImg} alt='escrever esquecer' />
        </WindowCard>
      </Content>
    </Wrapper>
)}
