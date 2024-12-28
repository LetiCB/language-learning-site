import { useParams } from 'react-router-dom';
import games from "../data/drag-and-drop.json";
import { GameContainer, TitleContainer } from './DragAndDropGame.styles';
import DragAndDropBoard from 'src/components/DragAndDropBoard/DragAndDropBoard';
import ProgressBar from 'src/components/ProgressBar/ProgressBar';
import { useProgress } from 'src/context/ProgressContext';
import { useEffect, useState } from 'react';
import Modal from 'src/components/Modal/Modal';
import AlertMessage from 'src/components/Alert/AlertMessage';

const DragAndDropGamePage = () => {
  const { title } = useParams();
  const { correctItems, totalItems, resetProgress, setTotalItems } = useProgress();

  const game = games.find(game => game.title === title);

  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [alert, setAlert] = useState<{ message: string; type: "success" | "error" } | null>(null);

  const showAlert = (message: string, type: "success" | "error") => {
    setAlert({ message, type });
  };

  useEffect(() => {
    if (game) {
      resetProgress();
      setTotalItems(game.items.length);
    }
  }, [game]);

  useEffect(() => {
    if (correctItems === totalItems && totalItems > 0) {
      setIsModalOpen(true);
    }
  }, [correctItems, totalItems]);

  const closeModal = () => {
    setIsModalOpen(false);
    window.scrollTo(0, 0);
  };

  const handleReset = () => {
    resetProgress();
    setIsModalOpen(false);
    if (game) setTotalItems(game.items.length);
    window.scrollTo(0, 0);
  };

  if (!game) return <p>Ups... no encontramos el juego</p>;

  console.log('** correct Items ', correctItems);
  console.log('total Items', totalItems);

  return (
      <GameContainer>
        <TitleContainer>
          <h1>{game.title}</h1>
          <p>{game.description}</p>
        </TitleContainer>
        <ProgressBar correctItems={correctItems} totalItems={totalItems} />
        <DragAndDropBoard gameData={game} onAlert={showAlert} />
        {alert && (
          <AlertMessage
            message={alert.message}
            type={alert.type}
            onClose={() => setAlert(null)}
          />
        )}
        {isModalOpen && (
          <Modal
            title="¡Felicitaciones!"
            message={`Completaste todas las categorías correctamente`}
            primaryButtonText="Volver a jugar"
            primaryButtonOnClick={handleReset}
            secondaryButtonText="Cerrar"
            secondaryButtonOnClick={closeModal}
            onClose={closeModal}
          />
        )}
      </GameContainer>
    );
};

export default DragAndDropGamePage;
