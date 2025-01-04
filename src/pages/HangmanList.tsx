import { useNavigate, useParams } from 'react-router-dom';
import hangmanGames from '../data/hangman.json';
import Card from 'src/components/Card/Card';
import { HangmanListContainer, HangmanListGrid } from './HangmanList.styles';

const HangmanList = () => {
  const navigate = useNavigate();
  const { language } = useParams<{ language: string }>();
  const filteredGames = hangmanGames.filter(game => game.language.toLowerCase() === language?.toLowerCase());

  return (
    <HangmanListContainer>
      <h1>Juegos de ahoracado en {language}</h1>
      <HangmanListGrid>
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
      </HangmanListGrid>
    </HangmanListContainer>
  );
};

export default HangmanList;
