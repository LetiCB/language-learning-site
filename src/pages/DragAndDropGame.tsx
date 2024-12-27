import { useParams } from 'react-router-dom';
import games from "../data/drag-and-drop.json";
import { GameContainer, TitleContainer } from './DragAndDropGame.styles';
import DragAndDropBoard from 'src/components/DragAndDropBoard/DragAndDropBoard';

const DragAndDropGamePage = () => {
  const { title } = useParams();
  const game = games.find(game => game.title === title);

  if (!game) return <p>Ups... no encontramos el juego</p>;

    return (
      <GameContainer>
        <TitleContainer>
          <h1>{game.title}</h1>
          <p>{game.description}</p>
        </TitleContainer>
        <DragAndDropBoard gameData={game} />
      </GameContainer>
    );
};

export default DragAndDropGamePage;
