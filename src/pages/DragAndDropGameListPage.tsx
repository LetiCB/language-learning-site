import { useNavigate, useParams } from 'react-router-dom';
import { useProgress } from 'src/context/ProgressContext';
import games from "../data/drag-and-drop.json";
import Card from 'src/components/Card/Card';
import { GameContainer, GameListContainer } from './DragAndDropGameListPage.styles';

const DragAndDropGameList = () => {
    const navigate = useNavigate();
    const { resetProgress } = useProgress();
    const { language } = useParams<{ language: string }>();
    const filteredGames = games.filter(game => game.language.toLowerCase() === language?.toLowerCase());
    resetProgress();

    return (
      <GameContainer>
        <h1>Juegos de arrastre en {language}</h1>
        <GameListContainer>
          {filteredGames.map(game => (
            <Card
              key={game.id}
              title={game.title}
              description={game.description}
              onClick={() => navigate(`/${language}/juegos-de-arrastre/${game.title}`)}
              image={game.image ? `/images/dragAndDrop/${game.image}` : '/images/no-image.png'}
              variant="round"
            />
          ))}
        </GameListContainer>
      </GameContainer>
    );
  };
  
  export default DragAndDropGameList;
  