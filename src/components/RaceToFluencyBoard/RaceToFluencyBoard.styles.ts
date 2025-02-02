import styled from "styled-components";

export const RaceBoard = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

export const BoardContainer = styled.div<{ columns: number }>`
  display: grid;
  grid-template-columns: repeat(${({ columns }) => columns}, 1fr);
  gap: 0.625rem;
  padding: 1.25rem;
  position: relative;
  justify-content: center;
  align-items: center;
  max-width: 37.5rem;
  margin: 0 auto;
`;

export const Cell = styled.div<{ category: number }>`
  min-width: 5rem;
  width: 100%;
  min-height: 5rem;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  box-shadow: 0px 0.25rem 0.375rem rgba(0, 0, 0, 0.1);
  border-radius: 0.625rem;
  background-color: ${({ category }) =>
    category === 1 ? "#d1e8ff" : category === 2 ? "#ffeb99" : "#ffb3b3"};
  position: relative;
  font-weight: bold;

  &:hover {
    box-shadow: 0px 0.375rem 0.625rem rgba(0, 0, 0, 0.15);
    transform: scale(1.05);
    transition: all 0.2s ease-in-out;
  }
`;

export const StartLine = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #222;
  color: white;
  font-weight: bold;
  padding: 0.625rem;
  border-radius: 0.625rem;
  margin-bottom: 1.25rem;
  width: 100%;
  min-height: 3.125rem;
  gap: 1rem;
`;

export const FinishLine = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  padding: 1rem;
  background: repeating-linear-gradient(
    45deg,
    black,
    black 0.625rem,
    white 0.625rem,
    white 1.25rem
  );
  border-radius: 0.625rem;
  margin-top: 1.25rem;
`;

export const WinnersContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 0.3125rem 0.625rem;
  border-radius: 0.3125rem;
  background: rgb(255, 255, 255, 0.7);
`;

export const Winners = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1rem;

`;

export const FinishLineTitle = styled.div`
  font-size: 1.5rem;
  font-weight: bold;
  color: black;
  padding: 0.3125rem 0.625rem;
`;

export const PlayersContainer = styled.div`
  display: flex;
  gap: 0.25rem;
  position: absolute;
  bottom: 0.3125rem;
`;

export const PlayerMarker = styled.div<{ color: string }>`
  width: 1.25rem;
  height: 1.25rem;
  border-radius: 50%;
  background-color: ${({ color }) => color};
  border: 0.125rem solid white;
  box-shadow: 0px 0.125rem 0.25rem rgba(0, 0, 0, 0.3);
  position: relative;
  cursor: pointer;

  &::after {
    content: attr(data-name);
    position: absolute;
    bottom: 120%;
    left: 50%;
    transform: translateX(-50%);
    background-color: rgba(0, 0, 0, 0.75);
    color: white;
    font-size: 0.75rem;
    padding: 0.3125rem 0.5rem;
    border-radius: 0.3125rem;
    white-space: nowrap;
    opacity: 0;
    pointer-events: none;
    transition: opacity 0.2s ease-in-out;
  }

  &:hover::after {
    opacity: 1;
  }
`;
