import React from 'react';

import { MdEmail } from 'react-icons/md';
import { BsLinkedin, BsGithub } from 'react-icons/bs';

import { Wrapper } from './styles';

export const Contact: React.FC = () => {
  return (
    <Wrapper id="contact"> 
      <h2> Contact Me </h2>
      <p> You can contact me through all the plataforms listed bellow:</p>
      <div> 
        <span>
          <a href=""><BsLinkedin color="white" size="2rem"/></a>
          - Linkdin
        </span>
        <span> 
          <a href="https://www.github.com/Vini-ara" target="blank"><BsGithub color="white" size="2rem"/></a>
          - Github
        </span>
        <span> 
          <a href="mailto:vinicius.ar02@gmail.com" target="blank"><MdEmail color="white" size="2rem" /></a>
          - Email
        </span>
      </div>
    </Wrapper>
  )
};
