import { Wrapper, WindowCard, WindowCardHeader, Info, Content, Links } from './styles';
import pokedexImg from '../../../assets/listScreenshot.jpg';

export const Projects: React.FC = () => (
  <Wrapper>
    <h2>Projects...</h2>

    <Content>
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

      <Info>
        <h3> Pokedexer </h3>

        <p>Check the info about any pokemon you want, with all the details necessary, evolution chains, base stats, type weaknesses and more.</p>

        <Links> 
          <button><a>Code</a></button>
          <button>Site</button>
        </Links>

      </Info>
    </Content>
  </Wrapper>
)
