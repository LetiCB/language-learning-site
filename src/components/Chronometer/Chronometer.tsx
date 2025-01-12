import React, { useEffect, useState } from "react";
import { Button, ButtonsContainer, ChronometerContainer, TimeDisplay } from "./Chronometer.styles";

interface ChronometerProps {
  initialTime?: number;
  direction?: "up" | "down";
  isRunning: boolean;
  onTimeEnd?: () => void;
  onReset?: () => void;
}

const Chronometer: React.FC<ChronometerProps> = ({
  initialTime = 0,
  direction = "up",
  isRunning,
  onTimeEnd,
  onReset,
}) => {
  const [time, setTime] = useState(initialTime);

  useEffect(() => {
    let timer: NodeJS.Timeout | null = null;

    if (isRunning) {
      timer = setInterval(() => {
        setTime((prevTime) =>
          direction === "up" ? prevTime + 1 : Math.max(0, prevTime - 1)
        );
      }, 1000);
    }

    if (time === 0 && direction === "down" && onTimeEnd) {
      onTimeEnd();
    }

    return () => {
      if (timer) clearInterval(timer);
    };
  }, [isRunning, direction, time, onTimeEnd]);

  const formatTime = (seconds: number) => {
    const minutes = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${String(minutes).padStart(2, "0")}:${String(secs).padStart(2, "0")}`;
  };

  const handleReset = () => {
    setTime(initialTime);
    if (onReset) onReset();
  };

  return (
    <ChronometerContainer>
      <TimeDisplay>{formatTime(time)}</TimeDisplay>
      <ButtonsContainer>
        <Button onClick={handleReset}>Reset</Button>
      </ButtonsContainer>
    </ChronometerContainer>
  );
};

export default Chronometer;
