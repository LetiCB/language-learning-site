import { useNavigate, useParams } from 'react-router-dom';
import hangmanGames from '../data/hangman.json';
import Card from 'src/components/Card/Card';
import { ListContainer, ListGrid } from './styles/ListPage.styles';

const HangmanList = () => {
  const navigate = useNavigate();
  const { language } = useParams<{ language: string }>();
  const filteredGames = hangmanGames.filter(game => game.language.toLowerCase() === language?.toLowerCase());

  return (
    <ListContainer>
      <h1>Juegos de ahoracado en {language}</h1>
      <ListGrid>
        <Card
            key={'surprise'}
            title={'Random'}
            description={'Palabras de categorías al azar'}
            onClick={() => navigate(`/${language}/ahorcado/random`)}
            image={'/images/random.png'}
            variant="round"
        />
        {filteredGames.map(game => (
          <Card
            key={game.id}
            title={game.theme}
            description={game.description}
            onClick={() => navigate(`/${language}/ahorcado/${game.theme}`)}
            image={game.image ? `/images/hangman/${game.image}` : '/images/no-image.png'}
            variant="round"
          />
        ))}
      </ListGrid>
    </ListContainer>
  );
};

export default HangmanList;
