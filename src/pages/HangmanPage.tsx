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

  let words: string[] = [];

  if (theme === 'random') {
      const filteredGames = hangmanGames.filter((game) => game.language === language);
      
      words = filteredGames.flatMap((game) => game.words);
  } else {
      words = themeGame?.words || [];
  }

  const [difficulty, setDifficulty] = useState<'easy' | 'intermediate' | 'hard'>('easy');

  const maxAttemptsMap = {
    easy: 10,
    intermediate: 8,
    hard: 6,
  };
  
  const maxAttempts = maxAttemptsMap[difficulty] || 10;

  const languageKeyboard = (language && keyboards[language as 'francés' | 'inglés']) || [];

  if (!themeGame && theme !== 'random') return <p>Ups... no encontramos el juego</p>

  const handleChangeDifficulty = (newDifficulty: 'easy' | 'intermediate' | 'hard') => {
    setDifficulty(newDifficulty);
  };

  return (
    <HangmanPageContainer>
      <TitleContainer>
        <h1>Juego de ahorcado</h1>
        <h2>{themeGame?.theme}</h2>
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
            onClick={() => setDifficulty("intermediate")}
            className={difficulty === "intermediate" ? "selected" : ""}
          >
            Intermedio
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
        words={words}
        difficulty={difficulty}
        letters={languageKeyboard}
        maxAttempts={maxAttempts}
      />
    </HangmanPageContainer>
  );
};

export default HangmanPage;
