import React, { useState } from "react";
import { Button, Container, DiceContainer, Dot, Side } from "./Dice.styles";

const positions = [
  "translateZ(3.1em)", // 1 - Front
  "rotateY(90deg) translateZ(3.1em)", // 2 - Right
  "rotateY(-90deg) translateZ(3.1em)", // 3 - Left
  "rotateX(90deg) translateZ(3.1em)", // 4 - Top
  "rotateX(-90deg) translateZ(3.1em)", // 5 - Bottom
  "rotateY(180deg) translateZ(3.1em)", // 6 - Back
];

const rotations = [
  "rotateX(0deg) rotateY(0deg)", // 1 - Front
  "rotateY(-90deg)", // 2 - Right
  "rotateY(90deg)", // 3 - Left
  "rotateX(-90deg)", // 4 - Top
  "rotateX(90deg)", // 5 - Bottom
  "rotateY(180deg)", // 6 - Back
];

const diceSides = [
  [{ top: "50%", left: "50%" }], // 1
  [{ top: "20%", left: "20%" }, { top: "80%", left: "80%" }], // 2
  [{ top: "20%", left: "20%" }, { top: "50%", left: "50%" }, { top: "80%", left: "80%" }], // 3
  [{ top: "20%", left: "20%" }, { top: "80%", left: "20%" }, { top: "20%", left: "80%" }, { top: "80%", left: "80%" }], // 4
  [{ top: "20%", left: "20%" }, { top: "80%", left: "20%" }, { top: "20%", left: "80%" }, { top: "50%", left: "50%" }, { top: "80%", left: "80%" }], // 5
  [{ top: "20%", left: "20%" }, { top: "80%", left: "20%" }, { top: "20%", left: "80%" }, { top: "50%", left: "20%" }, { top: "50%", left: "80%" }, { top: "80%", left: "80%" }], // 6
];

type DiceProps = {
  onRoll: (value: number) => void;
  disabled?: boolean;
  maxValue?: number;
 };

const Dice: React.FC<DiceProps> = ({ onRoll, disabled = false, maxValue = 6 }) => {
  const [diceValue, setDiceValue] = useState<number>(1);

  const rollDice = () => {
    if (disabled) return;
    const randomValue = Math.floor(Math.random() * maxValue) + 1;
    setDiceValue(randomValue);
    onRoll(randomValue);
  };

  return (
    <Container>
      <DiceContainer style={{ transform: rotations[diceValue - 1] }}>
        {positions.map((pos, index) => (
          <Side key={index} position={pos}>
            {diceSides[index].map((dotPosition, dotIndex) => (
              <Dot key={dotIndex} style={{ top: dotPosition.top, left: dotPosition.left }} />
            ))}
          </Side>
        ))}
      </DiceContainer>
      <Button onClick={rollDice} disabled={disabled}>Roll Dice!</Button>
    </Container>
  );
};

export default Dice;
