import { Wrapper, WindowCard, WindowCardHeader } from './styles';
import pokedexImg from '../../../assets/listScreenshot.jpg';

export const Projects: React.FC = () => (
  <Wrapper>
    <h2>Projects...</h2>

    <WindowCard>
      <WindowCardHeader>
        <div className='windowController'>
          <div></div>
          <div className='yellow'></div>
          <div className='green'></div>
        </div>
        <p>~/Pokedexer</p>  
      </WindowCardHeader>

      <img src={pokedexImg} alt='pokedexer list page' />
      
    </WindowCard>
  </Wrapper>
)
