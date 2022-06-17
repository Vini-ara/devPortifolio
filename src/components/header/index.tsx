import React, { useState } from "react";

import { useScrollDirection } from '../../hooks/useScrollDirection'


import { HeaderWrapper, HeaderModal } from './styles';
import { BsList, BsX } from 'react-icons/bs';


interface handleScrollProps {
  prev: number;
  curr: number;
}

export const Header: React.FC = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [isModalActive, setIsModalActive] = useState(false);

  function handleScroll({prev, curr}: handleScrollProps) {
    if(prev > curr || curr < 80) {
      setIsVisible(true)
      return
    }

    if(prev < curr && curr > 80) {
      setIsVisible(false)
      return
    }
  }

  useScrollDirection({ effect: handleScroll });

  return (
    <HeaderWrapper isVisible={isVisible}>
        <h1>
          vini.araujo()
        </h1>
        <div>
          <BsList onClick={() => { if(!isModalActive) setIsModalActive(!isModalActive) }}/> 
          <nav>
            <a href="#about"> &lt;About/&gt; </a>
            <a href="#projects"> &lt;Projects/&gt; </a>
            <a href="#contact"> &lt;Contact/&gt; </a>
          </nav>
        </div>
        <HeaderModal isActive={isModalActive} >
          <BsX onClick={() => setIsModalActive(!isModalActive)}/>
          <nav>
            <a href="#about" onClick={() => setIsModalActive(!isModalActive)}> &lt;About/&gt; </a>
            <a href="#projects" onClick={() => setIsModalActive(!isModalActive)}> &lt;Projects/&gt; </a>
            <a href="#contact" onClick={() => setIsModalActive(!isModalActive)}> &lt;Contact/&gt; </a>
          </nav>
        </HeaderModal>
    </HeaderWrapper>
  )
}
