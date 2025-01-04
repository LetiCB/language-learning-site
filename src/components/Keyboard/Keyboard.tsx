import React from 'react'
import { KeyboardContainer, KeyButton } from './Keyboard.styles'

interface KeyboardProps {
  letters: string[]
  onLetterClick: (letter: string) => void
  correctLetters: string[]
  incorrectLetters: string[]
  disabled: boolean;
}

const Keyboard: React.FC<KeyboardProps> = ({
  letters,
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
        >
          {letter}
        </KeyButton>
      )
    })}
  </KeyboardContainer>
)

export default Keyboard
