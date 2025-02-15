import { useParams } from 'react-router-dom';
import { useState } from 'react';
import raceToFluencyGames from '../data/race-to-fluency.json';
import RaceToFLuencyBoard from 'src/components/RaceToFluencyBoard/RaceToFluencyBoard';
import Dice from 'src/components/Dice/Dice';
import { BoardContainer, GameContainer, PageContainer, ScoreDiceContainer, TitleContainer } from './RaceToFluencyGame.styles';
import PromptPanel from 'src/components/PromptPanel/PromptPanel';
import NotificationPanel from 'src/components/NotificationPanel/NotificationPanel';
import ScoreBoard from 'src/components/ScoreBoard/ScoreBoard';

const playersData = [
  { id: "p1", name: "Alice", position: 0, color: "blue", points: 0, finished: false },
  { id: "p2", name: "Bob", position: 0, color: "green", points: 0, finished: false },
  { id: "p3", name: "Tom", position: 0, color: "pink", points: 0, finished: false },
  { id: "p4", name: "Sally", position: 0, color: "red", points: 0, finished: false },
  { id: "p5", name: "Annie", position: 0, color: "yellow", points: 0, finished: false },
  { id: "p6", name: "Andy", position: 0, color: "orange", points: 0, finished: false }
];

const RaceToFluencyGame = () => {
  const { language } = useParams<{ language: string }>();
  const { theme } = useParams();
  const themeGame = raceToFluencyGames.find((game) => game.theme === theme);

  const [players, setPlayers] = useState(playersData);
  const [currentPlayerIndex, setCurrentPlayerIndex] = useState(0);
  const [gameOver, setGameOver] = useState(false);
  const [winner, setWinner] = useState('');
  const [promptText, setPromptText] = useState<string>('');
  const [isDiceDisabled, setIsDiceDisabled] = useState(false);

  if (!themeGame) return <p>Ups... no encontramos el juego</p>;

  const handlePlayerMove = (diceValue: number) => {
    setPlayers((prevPlayers) =>
      prevPlayers.map((player, index) => {
        if (index === currentPlayerIndex && !player.finished) {
          const newPosition = player.position + diceValue;
          const isFinished = newPosition >= themeGame.prompts.length;

          return { ...player, position: newPosition, finished: isFinished };
        }
        return player;
      })
    );

    setPromptText(themeGame.prompts[players[currentPlayerIndex].position].prompt);
    setIsDiceDisabled(true);
  };

  const handleAnswer = (isCorrect: boolean) => {
    setPlayers((prevPlayers) =>
      prevPlayers.map((player, index) => {
        if (index === currentPlayerIndex) {
          const newPoints = isCorrect ? player.points + 10 : player.points - 5;
          return { ...player, points: newPoints };
        }
        return player;
      })
    );

    let nextPlayerIndex = currentPlayerIndex;
    for (let i = 1; i < players.length; i++) {
      const candidateIndex = (currentPlayerIndex + i) % players.length;
      if (!players[candidateIndex].finished) {
        nextPlayerIndex = candidateIndex;
        break;
      }
    }
    setCurrentPlayerIndex(nextPlayerIndex);

    setPromptText('');
    setIsDiceDisabled(false);

    const allFinished = players.every(player => player.finished);
    if (allFinished) {
      setGameOver(true);
      setWinner(players.reduce((best, player) => (player.points > best.points ? player : best), players[0]).name);
    }
  };

  const notification = gameOver ? `🎉 ${winner} ha ganado! 🎉` : `Es el turno de ${players[currentPlayerIndex].name}`;

  console.log('Players? ', players);
  console.log('Prompt? ', promptText);
  
  return (
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
          <PromptPanel prompt={promptText} onAnswer={handleAnswer} />
          <Dice onRoll={handlePlayerMove} disabled={isDiceDisabled || gameOver} />
          <ScoreBoard players={players} />
        </ScoreDiceContainer>
      </GameContainer>
    </PageContainer>
  );
};

export default RaceToFluencyGame;
