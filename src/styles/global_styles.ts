import { createGlobalStyle } from 'styled-components';

type themeProps = {
  theme: {
    main_bg: string;
    text: string;
  }
}

export const GlobalStyles = createGlobalStyle`
  * {
    padding: 0; 
    margin: 0;
    box-sizing: border-box;
    font-family: 'VT323', monospace;
  }

  html {
    scroll-behavior: smooth;
  }

  body {
    background-color: ${(props: themeProps) => props.theme.main_bg};
    color: ${(props: themeProps) => props.theme.text};
  }

  button {
    cursor: pointer;
  }
`
