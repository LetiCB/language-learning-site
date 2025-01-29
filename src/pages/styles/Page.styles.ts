import styled from 'styled-components'

export const PageContainer = styled.div`
  margin-top: 0.2rem;
`;

export const TitleContainer = styled.div`
  text-align: center;
  height: 6rem;
  align-content: center;
`;

export const DifficultyContainer = styled.div`
  height: 9rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  hr {
    width: 40rem;
    border: none;
    border-top: 1px solid #ddd;
    margin: 0;
  }
`;

export const OptionsContainer = styled.div`
  margin: 0.7rem;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  font-size: 0.9rem;

  button {
    padding: 0.5rem 1rem;
    font-size: 0.9rem;
    border: none;
    border-radius: 0.5rem;
    background-color: white;
    color: ##6d4b5f;
    cursor: pointer;
    transition: background-color 0.3s;

  &:hover {
    background-color: #fbdada;
    color: #6d4b5f;
  }

  &.selected {
    background-color: #fbdada;
    color: #6d4b5f;
    font-weight: 600;
  }
`;


// SongPage Styles
export const LyricsContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
`;

// TriviaPage Styles
export const TriviaBoardContainer = styled.div`
  display: flex;
  flex-direction: row;
`;

export const TriviaCardsContainer = styled.div`
  display: flex;
  flex: 0.7;
`;

export const TimerScoreContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  flex: 0.3;
  gap: 2rem;
`;

export const TimerContainer = styled.div`
  display: flex;
`;

export const ScoreContainer = styled.div`
  display: flex;
  flex-direction: row;
  gap: 1rem;
  `;
