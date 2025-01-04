import React from 'react';
import { AnimatedBodyPart, AnimatedHead, Base, FigureContainer, Svg } from './HangmanFigure.styles';

interface HangmanFigureProps {
  wrongGuesses: number;
  maxAttempts: number;
}

const HangmanFigure: React.FC<HangmanFigureProps> = ({ wrongGuesses, maxAttempts }) => {
  return (
    <FigureContainer>
      <Svg viewBox="0 0 200 300">
        {/* Base */}
        <Base x1="10" y1="280" x2="190" y2="280" />
        <Base x1="50" y1="280" x2="50" y2="20" />
        <Base x1="50" y1="20" x2="150" y2="20" />
        <Base x1="150" y1="20" x2="150" y2="50" />

        {/* Head */}
        <AnimatedHead visible={wrongGuesses > 0} isGameOver={wrongGuesses >= maxAttempts} cx="150" cy="70" r="20" />

        {/* Body */}
        <AnimatedBodyPart visible={wrongGuesses > 1} isGameOver={wrongGuesses >= maxAttempts} x1="150" y1="90" x2="150" y2="170" />

        {/* Left Arm */}
        <AnimatedBodyPart visible={wrongGuesses > 2} isGameOver={wrongGuesses >= maxAttempts} x1="150" y1="110" x2="120" y2="140" />

        {/* Right Arm */}
        <AnimatedBodyPart visible={wrongGuesses > 3} isGameOver={wrongGuesses >= maxAttempts} x1="150" y1="110" x2="180" y2="140" />

        {/* Left Leg */}
        <AnimatedBodyPart visible={wrongGuesses > 4} isGameOver={wrongGuesses >= maxAttempts} x1="150" y1="170" x2="120" y2="220" />

        {/* Right Leg */}
        <AnimatedBodyPart visible={wrongGuesses > 5} isGameOver={wrongGuesses >= maxAttempts} x1="150" y1="170" x2="180" y2="220" />

        {maxAttempts > 6 && (
          <>
            {/* Left Foot */}
            <AnimatedBodyPart visible={wrongGuesses > 6} isGameOver={wrongGuesses >= maxAttempts} x1="120" y1="220" x2="110" y2="240" />

            {/* Right Foot */}
            <AnimatedBodyPart visible={wrongGuesses > 7} isGameOver={wrongGuesses >= maxAttempts} x1="180" y1="220" x2="190" y2="240" />
          </>
        )}
      </Svg>
    </FigureContainer>
  );
};

export default HangmanFigure;
