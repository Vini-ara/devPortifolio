import React from "react";
import { HeaderWrapper } from './styles';

export const Header: React.FC = () => {
  return (
    <HeaderWrapper>
        <h1>
          vini.araujo()
        </h1>
        <nav>
          <a> About </a>
          <a href="#projects"> Projects </a>
          <a href="#contact"> Contact </a>
        </nav>
    </HeaderWrapper>
  )
}
