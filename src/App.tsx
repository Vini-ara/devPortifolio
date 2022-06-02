import { GlobalStyles } from './styles/global_styles';
import { Header } from './components/header';
import { About } from './components/sections/about';
import { Projects } from './components/sections/projects'
import { Themes } from './styles/themes';

function App() {
  return (
    <Themes>
      <GlobalStyles />
      <Header/>
      <About/>
      <Projects />
    </Themes>
  )
}

export default App
