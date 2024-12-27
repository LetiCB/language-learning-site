import { useParams } from 'react-router-dom';
import games from "../data/drag-and-drop.json";
import { GameContainer, TitleContainer } from './DragAndDropGame.styles';
import DragAndDropBoard from 'src/components/DragAndDropBoard/DragAndDropBoard';
import ProgressBar from 'src/components/ProgressBar/ProgressBar';
import { useProgress } from 'src/context/ProgressContext';

const DragAndDropGamePage = () => {
  const { title } = useParams();
  const game = games.find(game => game.title === title);
  const { setTotalItems } = useProgress();

  if (!game) return <p>Ups... no encontramos el juego</p>;

  setTotalItems(game.items.length);

    return (
      <GameContainer>
        <TitleContainer>
          <h1>{game.title}</h1>
          <p>{game.description}</p>
        </TitleContainer>
        <ProgressBar />
        <DragAndDropBoard gameData={game} />
      </GameContainer>
    );
};

export default DragAndDropGamePage;
