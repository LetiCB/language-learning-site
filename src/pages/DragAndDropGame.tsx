import { useParams } from 'react-router-dom';
import games from "../data/drag-and-drop.json";
import DragAndDropBoard from 'src/components/DragAndDropBoard/DragAndDropBoard';
import ProgressBar from 'src/components/ProgressBar/ProgressBar';
import { useProgress } from 'src/context/ProgressContext';
import { useEffect, useState } from 'react';
import Modal from 'src/components/Modal/Modal';
import AlertMessage from 'src/components/Alert/AlertMessage';
import { PageContainer, TitleContainer } from './styles/Page.styles';

type Item = {
  id: string;
  type: string;
  content: string;
  category: string;
};

const DragAndDropGamePage = () => {
  const { title } = useParams();
  const { correctItems, totalItems, resetProgress, setTotalItems } = useProgress();

  const game = games.find(game => game.title === title);

  const [shuffledItems, setShuffledItems] = useState<Item[]>([]);
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [alert, setAlert] = useState<{ message: string; type: "success" | "error" } | null>(null);

  const shuffleItems = (items: Item[]) => {
    const shuffled = [...items];
    for (let i = shuffled.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    return shuffled;
  };

  const showAlert = (message: string, type: "success" | "error") => {
    setAlert({ message, type });
  };

  const initializeGame = () => {
    if (game) {
      const shuffled = shuffleItems(game.items);
      setShuffledItems(shuffled);
      resetProgress();
      setTotalItems(shuffled.length);      
    }
  };

  useEffect(() => {
    initializeGame();
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
    initializeGame();
    setIsModalOpen(false);
    if (game) setTotalItems(game.items.length);
    window.scrollTo(0, 0);
  };

  if (!game) return <p>Ups... no encontramos el juego</p>;

  return (
      <PageContainer>
        <TitleContainer>
          <h1>{game.title}</h1>
          <p>{game.description}</p>
        </TitleContainer>
        <ProgressBar correctItems={correctItems} totalItems={totalItems} />
        <DragAndDropBoard 
          gameData={{ ...game, items: shuffledItems }} 
          onAlert={showAlert} 
        />
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
      </PageContainer>
    );
};

export default DragAndDropGamePage;
