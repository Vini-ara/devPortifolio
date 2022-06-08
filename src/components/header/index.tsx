import React, { useState, useEffect, useRef } from "react";
import { HeaderWrapper } from './styles';

export const Header: React.FC = () => {
  const [isVisible, setIsVisible] = useState(true);

  const toggleIsVisible = () => {
    setIsVisible(!isVisible);
  }
  const position = useRef(window.scrollY);

  useEffect(() => {
    let timeout = null;

    function getScroll() {
      return window.scrollY 
    }

    function callback() {
      let currentPosition = getScroll();
      if(currentPosition < position.current || currentPosition <= 100) {
        console.log(currentPosition)
        setIsVisible(true);
      } else {
        setIsVisible(false)
      }
      position.current = currentPosition;
      timeout = null;
    }

    function handleScroll() {
      if(timeout === null) {
        timeout = setTimeout(callback, 200)
        return
      }
    }

    window.addEventListener('scroll', handleScroll)

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, []);

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
