import React, { useState, useEffect } from "react";
import {
  LyricsSectionContainer,
  LineContainer,
  LineText,
  OptionsContainer,
  OptionButton,
  Input,
  Feedback,
  ResetButton,
  VerifyButton,
  ActionContainer,
  ActionButtonContainer,
} from "./LyricsSection.styles";
import Modal from "../Modal/Modal";

interface SongLine {
  line: string;
  options: string[];
}

interface Song {
  id: string;
  language: string;
  artist: string;
  title: string;
  url: string;
  lyrics: SongLine[];
}

interface LyricsSectionProps {
  song: Song;
  difficulty: string;
}

const shuffleOptions = (array: string[]): string[] => {
  return [...array].sort(() => Math.random() - 0.5);
};

const LyricsSection: React.FC<LyricsSectionProps> = ({ song, difficulty }) => {
  const [shuffledLyrics, setShuffledLyrics] = useState<SongLine[]>([]);
  const [selectedOptions, setSelectedOptions] = useState<{ [lineIndex: number]: string }>({});
  const [feedback, setFeedback] = useState<{ [lineIndex: number]: string }>({});
  const [showResult, setShowResult] = useState<boolean>(false);
  const [score, setScore] = useState<number>(0);
  const [interactionTypes, setInteractionTypes] = useState<string[]>([]);
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  useEffect(() => {
    const shuffled = song.lyrics.map((line) => ({
      ...line,
      options: shuffleOptions(line.options),
    }));
    setShuffledLyrics(shuffled);

    if (difficulty === "intermediate") {
      const types = shuffled.map(() => (Math.random() > 0.5 ? "button" : "input"));
      setInteractionTypes(types);
    }

    setSelectedOptions({});
    setFeedback({});
    setShowResult(false);
    setScore(0);
  }, [song, difficulty]);

  const handleOptionClick = (lineIndex: number, option: string) => {
    setSelectedOptions((prev) => ({
      ...prev,
      [lineIndex]: option,
    }));
  };

  const handleInputChange = (lineIndex: number, event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    setSelectedOptions((prev) => ({
      ...prev,
      [lineIndex]: value,
    }));
  };

  const handleVerify = () => {
    let correctAnswers = 0;

    const newFeedback: { [lineIndex: number]: string } = {};

    song.lyrics.forEach((line, lineIndex) => {
      const selectedAnswer = selectedOptions[lineIndex];
      const correctAnswer = line.options[0];

      if (selectedAnswer === correctAnswer) {
        newFeedback[lineIndex] = "✔ ¡Muy bien!";
        correctAnswers += 1;
      } else {
        newFeedback[lineIndex] = "✘ Sigue intentándolo!";
      }
    });

    setFeedback(newFeedback);
    setScore(Number(((correctAnswers / song.lyrics.length) * 100).toFixed(2)));
    setShowResult(true);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    window.scrollTo(0, 0);
  };

  const handleReset = () => {
    setSelectedOptions({});
    setFeedback({});
    setShowResult(false);
    setScore(0);
    setIsModalOpen(false);
    window.scrollTo(0, 0);
  };

  return (
    <LyricsSectionContainer>
      {shuffledLyrics.map((line, lineIndex) => (
        <LineContainer key={lineIndex}>
          <LineText>{line.line}</LineText>

          {difficulty === "easy" && (
            <OptionsContainer>
              {line.options.map((option, optionIndex) => (
                <OptionButton
                  key={optionIndex}
                  onClick={() => handleOptionClick(lineIndex, option)}
                  selected={selectedOptions[lineIndex] === option}
                >
                  {option}
                </OptionButton>
              ))}
            </OptionsContainer>
          )}

          {difficulty === "hard" && (
            <Input
              type="text"
              placeholder="Completá"
              value={selectedOptions[lineIndex] || ""}
              onChange={(e) => handleInputChange(lineIndex, e)}
            />
          )}

          {difficulty === "intermediate" && interactionTypes[lineIndex] === "button" && (
            <OptionsContainer>
              {line.options.map((option, optionIndex) => (
                <OptionButton
                  key={optionIndex}
                  onClick={() => handleOptionClick(lineIndex, option)}
                  selected={selectedOptions[lineIndex] === option}
                >
                  {option}
                </OptionButton>
              ))}
            </OptionsContainer>
          )}

          {difficulty === "intermediate" && interactionTypes[lineIndex] === "input" && (
            <Input
              type="text"
              placeholder="Completá"
              value={selectedOptions[lineIndex] || ""}
              onChange={(e) => handleInputChange(lineIndex, e)}
            />
          )}

          {feedback[lineIndex] && (
            <Feedback correct={feedback[lineIndex] === "✔ ¡Muy bien!"}>
                {feedback[lineIndex]}
            </Feedback>
)}
        </LineContainer>
      ))}

      <ActionContainer>
        <hr />
        <ActionButtonContainer>
          <VerifyButton onClick={handleVerify}>Verificar mis respuestas</VerifyButton>
          <ResetButton onClick={handleReset}>Resetear</ResetButton>
        </ActionButtonContainer>
        <hr />
      </ActionContainer>

      {isModalOpen && (
        <Modal
          title="Resultados"
          message={`Obtuviste un ${score}%!`}
          primaryButtonText="Ver mis respuestas"
          primaryButtonOnClick={closeModal}
          secondaryButtonText="Volver a intentar"
          secondaryButtonOnClick={handleReset}
          onClose={closeModal}
        />
      )}
    </LyricsSectionContainer>
  );
};

export default LyricsSection;
