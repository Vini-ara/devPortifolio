import { GlobalStyles } from './styles/global_styles';
import { Header } from './components/header'
import { Themes } from './styles/themes'

function App() {

  return (
    <Themes>
      <GlobalStyles />
      <Header/>
    </Themes>
  )
}

export default App
