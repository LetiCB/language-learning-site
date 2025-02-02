import React from "react";
import { BoardContainer, PlayerIcon, PlayerName, PlayerPoints, PlayerRow } from "./ScoreBoard.styles";

interface Player {
  id: string;
  name: string;
  position: number;
  color: string;
  points: number;
}

interface ScoreBoardProps {
  players: Player[];
}

const ScoreBoard: React.FC<ScoreBoardProps> = ({ players }) => {
  const sortedPlayers = [...players].sort((a, b) => b.points - a.points);

  return (
    <BoardContainer>
      {sortedPlayers.map((player) => (
        <PlayerRow key={player.id}>
          <PlayerIcon color={player.color} />
          <PlayerName>{player.name}</PlayerName>
          <PlayerPoints>{player.points} pts</PlayerPoints>
        </PlayerRow>
      ))}
    </BoardContainer>
  );
};

export default ScoreBoard;
