import { useParams } from 'react-router-dom'
import { useState } from 'react'
import hangmanGames from '../data/hangman.json'
import keyboards from '../data/keyboards.json';
import {
  DifficultyContainer,
  HangmanPageContainer,
  OptionsContainer,
  TitleContainer,
} from './HangmanPage.styles'
import HangmanGame from 'src/components/HangmanGame/HangmanGame';

const HangmanPage = () => {
  const { language } = useParams<{ language: string }>();
  const { theme } = useParams();
  const themeGame = hangmanGames.find((game) => game.theme === theme);

  const [difficulty, setDifficulty] = useState<'easy' | 'hard'>('easy');
  const maxAttempts = difficulty === 'easy' ? 10 : 6;

  const languageKeyboard = (language && keyboards[language as 'francés' | 'inglés']) || [];

  const [randomWord, setRandomWord] = useState<string>(themeGame ? 
    themeGame.words[Math.floor(Math.random() * themeGame.words.length)] : '');

  if (!themeGame) return <p>Ups... no encontramos el juego</p>

  const handleChangeDifficulty = (newDifficulty: 'easy' | 'hard') => {
    setDifficulty(newDifficulty);
    setRandomWord(themeGame.words[Math.floor(Math.random() * themeGame.words.length)]);
  };

  return (
    <HangmanPageContainer>
      <TitleContainer>
        <h1>Juego de ahorcado</h1>
        <h2>{themeGame.theme}</h2>
      </TitleContainer>
      <DifficultyContainer>
        <hr />
        <OptionsContainer>
          Elegí un nivel de dificultad:
          <button
            onClick={() => handleChangeDifficulty('easy')}
            className={difficulty === 'easy' ? 'selected' : ''}
          >
            Fácil
          </button>
          <button
            onClick={() => handleChangeDifficulty('hard')}
            className={difficulty === 'hard' ? 'selected' : ''}
          >
            Difícil
          </button>
        </OptionsContainer>
        <hr />
      </DifficultyContainer>
      <HangmanGame
        word={randomWord}
        difficulty={difficulty}
        letters={languageKeyboard}
        maxAttempts={maxAttempts}
      />
    </HangmanPageContainer>
  );
};

export default HangmanPage;
