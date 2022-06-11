import React, { useState, useEffect, useRef } from "react";
import { HeaderWrapper } from './styles';
import { useScrollDirection } from '../../hooks/useScrollDirection'

export const Header: React.FC = () => {
  const [isVisible, setIsVisible] = useState(true);

  function handleScroll({prev, curr}) {
    if(prev > curr || curr < 80) {
      setIsVisible(true)
      return
    }

    if(prev < curr && curr > 80) {
      setIsVisible(false)
      return
    }
  }

  useScrollDirection(handleScroll);

  return (
    <HeaderWrapper isVisible={isVisible}>
        <h1>
          vini.araujo()
        </h1>
        <nav>
          <a href="#about"> About </a>
          <a href="#projects"> Projects </a>
          <a href="#contact"> Contact </a>
        </nav>
    </HeaderWrapper>
  )
}
