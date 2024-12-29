import styled from "styled-components";

export const DraggableItemContainer = styled.div<{ isCorrect: boolean; categoryColor?: string }>`
  padding: 0.625rem;
  flex: 1 1 auto;
  text-align: center;
  border: 2px solid ${({ isCorrect }) => (isCorrect ? "#4caf50" : "#ccc")};
  border-radius: 5px;
  // background-color: ${({ isCorrect }) => (isCorrect ? "#e8f5e9" : "#fff")};
  background-color: ${({ isCorrect, categoryColor }) =>
    isCorrect
      ? categoryColor
        ? `${categoryColor}20`
        : "#e8f5e980"
      : "#fff"};
  cursor: ${({ isCorrect }) => (isCorrect ? "default" : "grab")};
  opacity: ${({ isCorrect }) => (isCorrect ? 0.7 : 1)};
  pointer-events: ${({ isCorrect }) => (isCorrect ? "none" : "auto")};
  transition: all 0.3s ease;

  img {
  max-width: 20rem;
  height: auto;
  border-radius: 5px;
  }
`;
