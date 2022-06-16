import React from "react";
import { Wrapper, ScrollDownAnimation, Content, ImgContainer } from './styles';

import webDevPNG from '../../../assets/wavingLilDude.png';

export const About: React.FC = () => {
  return (
    <Wrapper id="about">
      <Content>
        <h2>Hello There <span>&#128075;</span></h2> 
        
        <p>
          I'm Vinicius Araujo, a software Developer and a computer sciece student at University of Brasília.
        </p>
          
        <p>
          I love problem solving and creating inovative solutions, and I made this webSite to showcase some of my work. 
        </p>
      </Content> 

      <ImgContainer>
        <img src={webDevPNG} alt="web dev illustration" />
      </ImgContainer>

      <ScrollDownAnimation> 
        <div className="mouse">
          <div className="scroll">
          </div> 
        </div> 
      </ScrollDownAnimation>
    </Wrapper>
  )
}
