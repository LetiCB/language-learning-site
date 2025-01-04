import React from "react";

type WordDisplayProps = {
  word: string;
  guessedLetters: string[];
};

const WordDisplay: React.FC<WordDisplayProps> = ({ word, guessedLetters }) => {
  return (
    <p>
      {word.split("").map((letter, index) => 
          guessedLetters.includes(letter.toLowerCase())
            ? letter
            : "_"
      ).join(' ')}
    </p>
  );
};

export default WordDisplay;
