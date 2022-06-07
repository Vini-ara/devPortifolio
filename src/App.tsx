import { GlobalStyles } from './styles/global_styles';
import { Themes } from './styles/themes';

import { Header } from './components/header';
import { About } from './components/sections/about';
import { Projects } from './components/sections/projects'
import { Contact } from  './components/sections/contact';

function App() {
  return (
    <Themes>
      <GlobalStyles />
      <Header/>
      <About/>
      <Projects />
      <Contact />
    </Themes>
  )
}

export default App
