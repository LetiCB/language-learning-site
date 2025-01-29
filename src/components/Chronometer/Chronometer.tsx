import React, { useEffect, useState } from "react";
import { Container, Button, ButtonsContainer, ChronometerContainer, ProgressCircle, ProgressSvg, TimeDisplay } from "./Chronometer.styles";

interface ChronometerProps {
  initialTime?: number;
  direction?: "up" | "down";
  isRunning: boolean;
  onTimeEnd?: () => void;
  onReset?: () => void;
  onPause?: (isPaused: boolean) => void;
  onTimeout?: () => void
}

const Chronometer: React.FC<ChronometerProps> = ({
    initialTime = 0,
    direction = "up",
    isRunning,
    onTimeEnd,
    onReset,
    onPause,
    onTimeout,
  }) => {
    const [time, setTime] = useState(initialTime);
    const [progress, setProgress] = useState(0);
    const [isPaused, setIsPaused] = useState(false);
  
    useEffect(() => {
      let timer: NodeJS.Timeout | null = null;
  
      if (isRunning && !isPaused) {
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
    }, [isRunning, isPaused, direction, time, onTimeEnd]);
  
    useEffect(() => {
      const totalTime = initialTime || 1;
      const newProgress =
        direction === "up" ? time / totalTime : 1 - time / totalTime;
      setProgress(newProgress);
    }, [time, direction, initialTime]);
  
    const formatTime = (seconds: number) => {
      const minutes = Math.floor(seconds / 60);
      const secs = seconds % 60;
      return `${String(minutes).padStart(2, "0")}:${String(secs).padStart(2, "0")}`;
    };
  
    const handleReset = () => {
      setTime(initialTime);
      setProgress(0);
      if (onReset) onReset();
    };

    const togglePause = () => {
      setIsPaused((prev) => !prev);
      if (onPause) onPause(!isPaused);
    };
  
    return (
      <Container>
        <ChronometerContainer>
          <ProgressSvg>
            <circle cx="75" cy="75" r="65" />
            <circle
              cx="75"
              cy="75"
              r="65"
              style={{
                strokeDasharray: `${2 * Math.PI * 65}`,
                strokeDashoffset: `${(1 - progress) * 2 * Math.PI * 65}`,
              }}
            />
          </ProgressSvg>
          <TimeDisplay>{formatTime(time)}</TimeDisplay>
        </ChronometerContainer>
        <ButtonsContainer>
          <Button onClick={togglePause}>
            {isPaused ? "Reanudar" : "Pausar"}
          </Button>
          <Button onClick={handleReset}>Reset</Button>          
        </ButtonsContainer>
      </Container>
    );
  };
  
  export default Chronometer;
  