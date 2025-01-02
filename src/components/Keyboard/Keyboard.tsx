import React from 'react'
import { KeyboardContainer, KeyButton } from './Keyboard.styles'

interface KeyboardProps {
  letters: string[]
  difficulty: 'easy' | 'hard'
  onLetterClick: (letter: string) => void
  correctLetters: string[]
  incorrectLetters: string[]
  disabled: boolean;
}

const Keyboard: React.FC<KeyboardProps> = ({
  letters,
  difficulty,
  onLetterClick,
  correctLetters,
  incorrectLetters,
  disabled
}) => (
  <KeyboardContainer>
    {letters.map((letter) => {
      const isCorrect = correctLetters.includes(letter)
      const isIncorrect = incorrectLetters.includes(letter)

      return (
        <KeyButton
          key={letter}
          onClick={() => !disabled && onLetterClick(letter)}
          isCorrect={isCorrect}
          isIncorrect={isIncorrect}
          disabled={disabled || isCorrect || isIncorrect}
          title={
            difficulty === 'easy' && /[áéíóúàèìòùâêîôûäëïöüçñ]/i.test(letter)
              ? `Considerado igual a ${letter.normalize('NFD').replace(/[\u0300-\u036f]/g, '')}`
              : undefined
          }
        >
          {letter}
        </KeyButton>
      )
    })}
  </KeyboardContainer>
)

export default Keyboard
