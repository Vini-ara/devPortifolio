import React from "react";
import { HeaderWrapper } from './styles';

export const Header: React.FC = () => {
  return (
    <HeaderWrapper>
        <h1>
          Va
        </h1>
        <nav>
          <a> About </a>
          <a> Projects </a>
          <a> Contact </a>
        </nav>
    </HeaderWrapper>
  )
}
