import React, { useEffect, useState } from 'react';
import WordDisplay from '../WordDisplay/WordDisplay';
import Keyboard from '../Keyboard/Keyboard';
import HangmanFigure from '../HangmanFigure/HangmanFigure';
import { GameContainer, KeyboardContainer, RemainingAttempts, RightColumnContainer, Number } from './HangmanGame.styles';
import Modal from '../Modal/Modal';

interface HangmanGameProps {
  word: string;
  difficulty: 'easy' | 'hard';
  letters: string[];
  maxAttempts: number;
}

const HangmanGame: React.FC<HangmanGameProps> = ({ word, difficulty, letters, maxAttempts }) => {
    const [guessedLetters, setGuessedLetters] = useState<string[]>([]);
    const [wrongGuesses, setWrongGuesses] = useState<number>(0);
    const [correctLetters, setCorrectLetters] = useState<string[]>([]);
    const [incorrectLetters, setIncorrectLetters] = useState<string[]>([]);
    const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  
    const normalizedWord = word.normalize('NFD').replace(/[\u0300-\u036f]/g, '');
    const displayWord = word;
  
    const isGameWon = normalizedWord.split('').every((letter) =>
      guessedLetters.includes(letter) || /[^a-zA-Z]/.test(letter)
    );
  
    const isGameOver = wrongGuesses >= maxAttempts;
  
    const handleLetterClick = (letter: string) => {
        if (guessedLetters.includes(letter)) return;
      
        setGuessedLetters((prev) => [...prev, letter]);
      
        if (normalizedWord.includes(letter)) {
          setCorrectLetters((prev) => [...prev, letter]);
        } else {
          setIncorrectLetters((prev) => [...prev, letter]);
          setWrongGuesses((prev) => prev + 1);
        }
      };
  
    const filteredLetters = difficulty === 'easy' 
      ? letters.filter((letter) => !/[áéíóúäëïöüàèìòùâêîôûçñ']/i.test(letter)) 
      : letters.filter((letter) => !/[^a-zA-Záéíóúäëïöüàèìòùâêîôûçñ]/i.test(letter));

    const closeModal = () => {
      setIsModalOpen(false);
    };

    const handleReset = () => {
      setGuessedLetters([]);
      setWrongGuesses(0);
      setCorrectLetters([]);
      setIncorrectLetters([]);
      setIsModalOpen(false);
    };
  
    useEffect(() => {
      setGuessedLetters([]);
      setWrongGuesses(0);
      setCorrectLetters([]);
      setIncorrectLetters([]);
    }, [word, difficulty]);

    useEffect(() => {
      if (isGameOver || isGameWon)
        setIsModalOpen(true);
    }, [isGameOver, isGameWon])

    return (
      <div>
        <GameContainer>
          <HangmanFigure wrongGuesses={wrongGuesses} maxAttempts={maxAttempts} />
          <RightColumnContainer>
            <RemainingAttempts>
              <p>Intentos restantes:</p>
              <Number isLastAttempts={(maxAttempts - wrongGuesses) <= 2}>{maxAttempts - wrongGuesses}</Number>
            </RemainingAttempts>
            <WordDisplay word={displayWord} guessedLetters={guessedLetters} />
          </RightColumnContainer>
        </GameContainer>
        <KeyboardContainer>
          <Keyboard
              letters={filteredLetters}
              difficulty={difficulty}
              onLetterClick={handleLetterClick}
              correctLetters={correctLetters}
              incorrectLetters={incorrectLetters}
              disabled={isGameOver || isGameWon}
          />
        </KeyboardContainer>
        {isModalOpen && (
          <Modal
            title={isGameOver ? "¡Perdiste!" : "¡Felicidades!"}
            message={isGameOver 
              ? `La palabra era: ${displayWord}` 
              : "Adivinaste la palabra"}
            primaryButtonText="Volver a jugar"
            primaryButtonOnClick={handleReset}
            secondaryButtonText="Cerrar"
            secondaryButtonOnClick={closeModal}
            onClose={closeModal}
          />
        )}
      </div>
    );
  };

export default HangmanGame;
