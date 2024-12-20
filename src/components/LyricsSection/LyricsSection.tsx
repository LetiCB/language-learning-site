import React, { useState, useEffect } from "react";
import { LyricsSectionContainer, LineContainer, LineText, OptionsContainer, OptionButton, Input } from "./LyricsSection.styles";

interface SongLine {
  line: string;
  options: string[];
}

interface Song {
  id: number;
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

  useEffect(() => {
    const shuffled = song.lyrics.map((line) => ({
      ...line,
      options: shuffleOptions(line.options),
    }));
    setShuffledLyrics(shuffled);
    setSelectedOptions({});
  }, [song, difficulty]);

  const handleOptionClick = (lineIndex: number, option: string) => {
    setSelectedOptions((prev) => ({
      ...prev,
      [lineIndex]: option, 
    }));
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

          {difficulty === "hard" && <Input type="text" placeholder="Complete the line" />}

          {difficulty === "intermediate" && (
            Math.random() > 0.5 ? (
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
            ) : (
              <Input type="text" placeholder="Complete the line" />
            )
          )}
        </LineContainer>
      ))}
    </LyricsSectionContainer>
  );
};

export default LyricsSection;
