import { useParams } from 'react-router-dom'
import { useState } from 'react'
import raceToFluencyGames from '../data/race-to-fluency.json'
import RaceToFLuencyBoard from 'src/components/RaceToFluencyBoard/RaceToFluencyBoard';
import Dice from 'src/components/Dice/Dice';
import { BoardContainer, GameContainer, PageContainer, ScoreDiceContainer, TitleContainer } from './RaceToFluencyGame.styles';
import PromptPanel from 'src/components/PromptPanel/PromptPanel';
import NotificationPanel from 'src/components/NotificationPanel/NotificationPanel';
import ScoreBoard from 'src/components/ScoreBoard/ScoreBoard';

const playersData = [
  { id: "p1", name: "Alice", position: 0, color: "blue", points: 0 },
  { id: "p2", name: "Bob", position: 0, color: "green", points: 0 },
  { id: "p3", name: "Tom", position: 0, color: "pink", points: 0 },
  { id: "p4", name: "Sally", position: 0, color: "red", points: 0 },
  { id: "p5", name: "Annie", position: 0, color: "yellow", points: 0 },
  { id: "p6", name: "Andy", position: 0, color: "orange", points: 0 }
];

const RaceToFluencyGame = () => {
  const { language } = useParams<{ language: string }>();
  const { theme } = useParams();
  const themeGame = raceToFluencyGames.find((game) => game.theme === theme);

  const [players, setPlayers] = useState(playersData);
  const [currentPlayerIndex, setCurrentPlayerIndex] = useState(0);
  const [gameOver, setGameOver] = useState(false);
  const [winners, setWinners] = useState('');

  if (!themeGame) return <p>Ups... no encontramos el juego</p>

  const handlePlayerMove = (diceValue: number) => {
    setPlayers((prevPlayers) =>
      prevPlayers.map((player, index) => {
        if (index === currentPlayerIndex) {
          const newPosition = player.position + diceValue;
          if (newPosition > themeGame.prompts.length) {
            setWinners(player.name);
            setGameOver(true);
          }
          return { ...player, position: newPosition };
        }
        return player;
      })
    );
    setCurrentPlayerIndex((prev) => (prev + 1) % players.length);
  };

  const notification = gameOver ? `🎉 ${winners} ha ganado! 🎉` : `Es el turno de ${players[currentPlayerIndex].name}`

  return(
    <PageContainer>
      <TitleContainer>
        <h1>Carrera hacia la fluidez</h1>
        <h2>{themeGame?.theme}</h2>
      </TitleContainer>
      <GameContainer>
        <BoardContainer>
          <RaceToFLuencyBoard prompts={themeGame.prompts} players={players} />
        </BoardContainer>
        <ScoreDiceContainer>
          <NotificationPanel message={notification} />
          <PromptPanel prompt={themeGame.prompts[0].prompt} />
          <Dice
            onRoll={handlePlayerMove}
            disabled={gameOver}
          />
          <ScoreBoard players={players} />
        </ScoreDiceContainer>
      </GameContainer>
    </PageContainer>
  )
};

export default RaceToFluencyGame;
