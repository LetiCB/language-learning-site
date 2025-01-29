import React from 'react';
import { ScoreboardContainer, ScoreItem, Label, Value } from './Scoreboard.styled';

interface ScoreboardProps {
  score?: number;
  streak?: number;
}

const Scoreboard: React.FC<ScoreboardProps> = ({ score, streak }) => {
  return (
    <ScoreboardContainer>
      {score && 
        <ScoreItem>
          <Label>Puntaje</Label>
          <Value>{score}</Value>
        </ScoreItem>
      }
      {streak &&
        <ScoreItem>
          <Label>Racha</Label>
          <Value>{streak}</Value>
        </ScoreItem>
      }
    </ScoreboardContainer>
  );
};

export default Scoreboard;
