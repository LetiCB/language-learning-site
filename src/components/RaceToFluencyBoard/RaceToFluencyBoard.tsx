import React from "react";
import { 
  BoardContainer, 
  Cell, 
  PlayerMarker, 
  StartLine, 
  FinishLine, 
  PlayersContainer, 
  FinishLineTitle, 
  Winners,
  WinnersContainer,
  RaceBoard
} from "./RaceToFluencyBoard.styles";

type Player = {
  id: string;
  name: string;
  position: number;
  color: string;
};

type Prompt = {
  id: string;
  prompt: string;
  category: number;
};

type BoardProps = {
  prompts: Prompt[];
  players: Player[];
};

const RaceToFluencyBoard: React.FC<BoardProps> = ({ prompts, players }) => {
  const columns = Math.min(prompts.length, 5);

  return (
    <RaceBoard>
      <StartLine>
        {players
          .filter((player) => player.position === 0)
          .map((player) => (
            <PlayerMarker key={player.id} color={player.color} data-name={player.name}  />
          ))}
      </StartLine>
      <BoardContainer columns={columns}>
        {prompts.map((prompt, index) => (
          <Cell key={prompt.id} category={prompt.category}>
            {index + 1}
            <PlayersContainer>
              {players
                .filter((player) => player.position - 1 === index)
                .map((player) => (
                  <PlayerMarker key={player.id} color={player.color} data-name={player.name} />
                ))}
            </PlayersContainer>
          </Cell>
        ))}
      </BoardContainer>
      <FinishLine>
        <WinnersContainer>
          <Winners>
            {players
              .filter((player) => player.position > prompts.length)
              .map((player) => (
                <PlayerMarker key={player.id} color={player.color} data-name={player.name} />
            ))}
          </Winners>
          <FinishLineTitle>🏁 Meta 🏁</FinishLineTitle>
        </WinnersContainer>
      </FinishLine>
    </RaceBoard>
  );
};

export default RaceToFluencyBoard;
