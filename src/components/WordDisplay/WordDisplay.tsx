import React from 'react';

const WordDisplay: React.FC<{ word: string; guessedLetters: string[] }> = ({ word, guessedLetters }) => (
    <p>
      {word.split('').map((char, index) =>
        /[^a-zA-Z]/.test(char)
          ? char
          : guessedLetters.includes(char.normalize('NFD').replace(/[\u0300-\u036f]/g, ''))
          ? char
          : '_'
      ).join(' ')}
    </p>
  );
  
export default WordDisplay;
  