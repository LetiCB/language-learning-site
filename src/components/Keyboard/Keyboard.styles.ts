import styled from "styled-components";

export const KeyboardContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  align-items: center;
  justify-content: center;
`;

export const KeyButton = styled.button<{ isCorrect?: boolean; isIncorrect?: boolean }>`
  padding: 0.625rem;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1rem;
  border-radius: 4px;
  border: 1px solid #ccc;
  background-color: ${({ isCorrect, isIncorrect }) =>
    isCorrect ? 'green' : isIncorrect ? 'red' : 'white'};
  color: ${({ isCorrect, isIncorrect }) =>
    isCorrect || isIncorrect ? 'white' : 'black'};
  cursor: ${({ isCorrect, isIncorrect }) =>
    isCorrect || isIncorrect ? 'not-allowed' : 'pointer'};
  opacity: ${({ isCorrect, isIncorrect }) =>
    isCorrect || isIncorrect ? 0.7 : 1};

  &:hover {
    background-color: ${({ isCorrect, isIncorrect }) =>
      isCorrect || isIncorrect ? '' : '#f0f0f0'};
  }

  &:disabled {
  opacity: 0.5;
  cursor: not-allowed;
}
`;
