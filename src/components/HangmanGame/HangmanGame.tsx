import React, { useEffect, useState } from 'react';
import WordDisplay from '../WordDisplay/WordDisplay';
import Keyboard from '../Keyboard/Keyboard';
import HangmanFigure from '../HangmanFigure/HangmanFigure';
import { GameContainer, KeyboardContainer, RemainingAttempts, RightColumnContainer, Number } from './HangmanGame.styles';
import Modal from '../Modal/Modal';

interface HangmanGameProps {
  words: string[];
  difficulty: 'easy' | 'intermediate' | 'hard';
  letters: string[];
  maxAttempts: number;
}

const HangmanGame: React.FC<HangmanGameProps> = ({ words, difficulty, letters, maxAttempts }) => {
    const [guessedLetters, setGuessedLetters] = useState<string[]>([]);
    const [wrongGuesses, setWrongGuesses] = useState<number>(0);
    const [correctLetters, setCorrectLetters] = useState<string[]>([]);
    const [incorrectLetters, setIncorrectLetters] = useState<string[]>([]);
    const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
    const [randomWord, setRandomWord] = useState<string>(words ? 
      words[Math.floor(Math.random() * words.length)] : '');

    const normalizedWord = randomWord.normalize('NFD').replace(/[\u0300-\u036f]/g, '');
    const displayWord = randomWord;

    const isGameWon = normalizedWord.split('').every((letter) =>
      guessedLetters.includes(letter) || /[^a-zA-Z]/.test(letter)
    );
  
    const isGameOver = wrongGuesses >= maxAttempts;

    const normalizeLetter = (letter: string) =>
      letter.normalize("NFD").replace(/\p{Diacritic}/gu, "");

    const handleLetterClick = (letter: string) => {
      if (guessedLetters.includes(letter)) return;
  
      setGuessedLetters((prev) => [...prev, letter]);
  
      const isCorrect = difficulty === "easy"
        ? randomWord.split("").some((l) => normalizeLetter(l) === letter)
        : randomWord.includes(letter);
  
      if (isCorrect) {
        setCorrectLetters((prev) => [...prev, letter]);
      } else {
        setWrongGuesses((prev) => prev + 1);
        setIncorrectLetters((prev) => [...prev, letter]);
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
      setRandomWord(words[Math.floor(Math.random() * words.length)]);
    };
  
    useEffect(() => {
      setRandomWord(words[Math.floor(Math.random() * words.length)]);
      setGuessedLetters([]);
      setWrongGuesses(0);
      setCorrectLetters([]);
      setIncorrectLetters([]);
    }, [words, difficulty]);

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
            <WordDisplay
              word={displayWord}
              guessedLetters={
                guessedLetters.concat(
                  difficulty === "easy"
                    ? randomWord
                        .split("")
                        .filter((l) => guessedLetters.includes(normalizeLetter(l)))
                    : []
                )
              }
            />
          </RightColumnContainer>
        </GameContainer>
        <KeyboardContainer>
          <Keyboard
              letters={filteredLetters}
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
              : `Adivinaste la palabra ${displayWord}`}
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
