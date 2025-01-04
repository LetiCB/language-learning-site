import styled, { css, keyframes } from 'styled-components';

const gameOverAnimation = keyframes`
  0% { transform: rotate(0deg); }
  25% { transform: rotate(-10deg); }
  50% { transform: rotate(10deg); }
  75% { transform: rotate(-10deg); }
  100% { transform: rotate(0deg); }
`;

export const AnimatedBodyPart = styled.line<{ visible: boolean; isGameOver: boolean }>`
  stroke: black;
  stroke-width: 4;
  stroke-linecap: round;
  opacity: ${({ visible }) => (visible ? 1 : 0)};
  transition: opacity 0.3s ease-in-out;

  ${({ isGameOver }) =>
    isGameOver &&
    css`
      stroke: red;
      animation: ${gameOverAnimation} 1s infinite;
      transform-origin: 150px 70px; 
    `}
`;

export const AnimatedHead = styled.circle<{ visible: boolean; isGameOver: boolean }>`
  fill: transparent;
  stroke: black;
  stroke-width: 4;
  opacity: ${({ visible }) => (visible ? 1 : 0)};
  transition: opacity 0.3s ease-in-out;

  ${({ isGameOver }) =>
    isGameOver &&
    css`
      stroke: red;
      animation: ${gameOverAnimation} 1s infinite;
      transform-origin: 150px 70px;
    `}
`;

export const Base = styled.line`
  stroke: black;
  stroke-width: 5;
  stroke-linecap: round;
`;

export const Rope = styled.line<{ isGameOver: boolean }>`
  stroke: black;
  stroke-width: 4;
  stroke-linecap: round;

  ${({ isGameOver }) =>
    isGameOver &&
    css`
      stroke: red;
    `}
`;

export const FigureContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 1.25rem;
`;

export const Svg = styled.svg`
  width: 100%;
  max-width: 12.5rem;
  height: auto;
`;
