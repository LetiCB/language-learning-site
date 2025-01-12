import { useParams } from 'react-router-dom'
import { useEffect, useState } from 'react';
import { useProgress } from 'src/context/ProgressContext';
import ProgressBar from 'src/components/ProgressBar/ProgressBar';
import Modal from 'src/components/Modal/Modal';
import AlertMessage from 'src/components/Alert/AlertMessage';
import trivias from '../data/trivia.json';
import { DifficultyContainer, OptionsContainer, PageContainer, TitleContainer } from './styles/Page.styles';
import TriviaCard from 'src/components/TriviaCard/TriviaCard';
import Chronometer from 'src/components/Chronometer/Chronometer';

type Question = {
    question: string;
    answers: string[];
  };

const TriviaPage = () => {
    const { theme } = useParams();
    const { correctItems, totalItems, resetProgress, setTotalItems } = useProgress();

    const trivia = trivias.find(trivia => trivia.theme === theme);
    const [difficulty, setDifficulty] = useState('easy');  const [shuffledItems, setShuffledItems] = useState<Question[]>([]);
    const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
    const [alert, setAlert] = useState<{ message: string; type: "success" | "error" } | null>(null);

    const shuffleItems = (items: Question[]) => {
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
      if (trivia) {
        const shuffled = shuffleItems(trivia.questions);
        setShuffledItems(shuffled);
        resetProgress();
        setTotalItems(shuffled.length);      
      }
    };

    useEffect(() => {
      initializeGame();
    }, [trivia]);
    
    useEffect(() => {
      if (correctItems === totalItems && totalItems > 0) {
        setIsModalOpen(true);
      }
    }, [correctItems, totalItems]);

    const closeModal = () => {
      setIsModalOpen(false);
    };

    const handleReset = () => {
      initializeGame();
      setIsModalOpen(false);
      if (trivia) setTotalItems(trivia.questions.length);
    };

    if (!trivia) return <p>Ups... no encontramos la trivia</p>;

    return (
        <PageContainer>
          <TitleContainer>
            <h1>{trivia.theme}</h1>
            <h2>{trivia.description}</h2>
          </TitleContainer>
          <DifficultyContainer>
              <hr />
              <OptionsContainer>
                  Elegí un nivel de dificultad:
                  <button
                      onClick={() => setDifficulty("easy")}
                      className={difficulty === "easy" ? "selected" : ""}
                  >
                      Fácil
                  </button>
                  <button
                      onClick={() => setDifficulty("intermediate")}
                      className={difficulty === "intermediate" ? "selected" : ""}
                  >
                      Intermedio
                  </button>
                  <button
                      onClick={() => setDifficulty("hard")}
                      className={difficulty === "hard" ? "selected" : ""}
                  >
                      Difícil
                  </button>
              </OptionsContainer>
              <hr />
          </DifficultyContainer>
          <ProgressBar correctItems={correctItems} totalItems={totalItems} />
          {/* Aquí va el juego/board o como se llame :) 
                Esto tengo de props en otro juego, sirve?
                gameData={{ ...trivia, questions: shuffledItems }} 
                onAlert={showAlert} 
          */}
          <TriviaCard questions={trivia.questions} difficulty={difficulty} />
          <Chronometer isRunning={false} />
          {alert && (
            <AlertMessage
              message={alert.message}
              type={alert.type}
              onClose={() => setAlert(null)}
            />
          )}
          {isModalOpen && (
            <Modal
              title=""
              message=""
              primaryButtonText="Volver a jugar"
              primaryButtonOnClick={handleReset}
              secondaryButtonText="Revisar mis respuestas"
              secondaryButtonOnClick={closeModal}
              onClose={closeModal}
            />
          )}
        </PageContainer>
    );
};

export default TriviaPage;
