import React, { ReactNode } from "react";
import { ThemeProvider } from "styled-components";

const darkTheme = {
  bg: "#151E3F", 
  main_bg: "#030027",
  text: "#E0E2DB",
  high_text: "#E77728"
}

interface ThemesProps {
  children: ReactNode;
}

export const Themes: React.FC<ThemesProps> = ({children}) => {
  return (
    <ThemeProvider theme={darkTheme}>
      {children}
    </ThemeProvider>
  )
}
