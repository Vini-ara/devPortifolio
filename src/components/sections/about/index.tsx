import React from "react";
import { Wrapper, ScrollDownAnimation, Content } from './styles';

import webDevPNG from '../../../assets/web-development.png';

export const About: React.FC = () => {
  return (
    <Wrapper>
      <Content>
        <h2>Hello There <span>&#128075;</span></h2> 
        
        <p>
          Some text that I am still to write Some text that I am still to writeSome text that I am still to writeSome text that I am still to writeSome text that I am still to writeSome text that I am still to writeSome text that I am still to write
        </p>
        <p>
          Some text that I am still to write Some text that I am still to writeSome text that I am still to writeSome text that I am still to writeSome text that I am still to writeSome text that I am still to writeSome text that I am still to write
        </p>
        <p>
          Some text that I am still to write Some text that I am still to writeSome text that I am still to writeSome text that I am still to writeSome text that I am still to writeSome text that I am still to writeSome text that I am still to write
        </p>
      </Content> 

      <img src={webDevPNG} alt="web dev illustration" />

      <ScrollDownAnimation> 
        <div className="mouse">
          <div className="scroll">
          </div> 
        </div> 
      </ScrollDownAnimation>

    </Wrapper>
  )
}
