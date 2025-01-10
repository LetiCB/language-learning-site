// src/context/GameContext.tsx
import React, { createContext, useContext, useState } from "react";

type GameContextType = {
  level: "easy" | "intermediate" | "hard";
  questions: Question[];
  currentQuestionIndex: number;
  score: number;
  streak: number;
  setLevel: (level: "easy" | "intermediate" | "hard") => void;
  setQuestions: (questions: Question[]) => void;
  nextQuestion: () => void;
  incrementScore: (points: number) => void;
  resetGame: () => void;
};

type Question = {
  question: string;
  answers: string[];
  correctAnswer: string;
};

const GameContext = createContext<GameContextType | undefined>(undefined);

export const GameProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [level, setLevel] = useState<"easy" | "intermediate" | "hard">("easy");
  const [questions, setQuestions] = useState<Question[]>([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [streak, setStreak] = useState(0);

  const nextQuestion = () => setCurrentQuestionIndex((prev) => prev + 1);

  const incrementScore = (points: number) => {
    setScore((prev) => prev + points);
    setStreak((prev) => prev + 1);
  };

  const resetGame = () => {
    setLevel("easy");
    setQuestions([]);
    setCurrentQuestionIndex(0);
    setScore(0);
    setStreak(0);
  };

  return (
    <GameContext.Provider
      value={{
        level,
        questions,
        currentQuestionIndex,
        score,
        streak,
        setLevel,
        setQuestions,
        nextQuestion,
        incrementScore,
        resetGame,
      }}
    >
      {children}
    </GameContext.Provider>
  );
};

export const useGame = () => {
  const context = useContext(GameContext);
  if (!context) throw new Error("useGame must be used within a GameProvider");
  return context;
};
