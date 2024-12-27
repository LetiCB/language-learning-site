import { useNavigate, useParams } from 'react-router-dom';
import games from "../data/drag-and-drop.json";
import Card from 'src/components/Card/Card';
import { GameContainer, GameListContainer } from './DragAndDropGameListPage.styles';

const DragAndDropGameList = () => {
    const navigate = useNavigate();
    const { language } = useParams<{ language: string }>();
    const filteredGames = games.filter(game => game.language.toLowerCase() === language?.toLowerCase());
  
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
              image={game.image ? `/images/${game.image}` : '/images/no-image.png'}
            />
          ))}
        </GameListContainer>
      </GameContainer>
    );
  };
  
  export default DragAndDropGameList;
  