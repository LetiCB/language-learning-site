import styled, { keyframes } from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const ChronometerContainer = styled.div`
  position: relative;
  width: 150px;
  height: 150px;
  border-radius: 50%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: #f3f3f3;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`;

export const ProgressSvg = styled.svg.attrs(() => ({
    viewBox: "0 0 150 150",
  }))`
    position: absolute;
    width: 100%;
    height: 100%;
  
    circle {
      fill: none;
      stroke-width: 12; /* Grosor del borde */
      transform: rotate(-90deg);
      transform-origin: center;
    }
  
    circle:first-child {
      stroke: #ffe0e9; /* Fondo del progreso */
    }
  
    circle:last-child {
      stroke: #b04c63; /* Color del progreso */
      stroke-linecap: round; /* Bordes redondeados */
      transition: stroke-dashoffset 0.8s cubic-bezier(0.4, 0, 0.2, 1); /* Suavizado */
    }
`;

export const TimeDisplay = styled.div`
  position: absolute;
  font-size: 1.5rem;
  font-weight: bold;
  color: #b04c63;
`;

export const ButtonsContainer = styled.div`
  padding: 1.5rem;
  display: flex;
  gap: 0.5rem;
`;

export const Button = styled.button`
  padding: 10px 20px;
  font-size: 1rem;
  border: none;
  border-radius: 5px;
  background-color: #b04c63;
  color: #ffe0e9;
  cursor: pointer;

  &:hover {
    background-color: #ffe0e9;
    color: #b04c63;
    border: 2px solid #b04c63;
  }
`;

export const rotate = keyframes`
  0% {
    stroke-dasharray: 0 100;
  }
  100% {
    stroke-dasharray: 100 0;
  }
`;

export const ProgressCircle = styled.div<{ progress: number }>`
  position: absolute;
  top: 0;
  left: 0;
  width: 150px;
  height: 150px;
  border-radius: 50%;
  background: conic-gradient(
    #007bff ${({ progress }) => progress * 360}deg,
    #ddd 0deg
  );
  z-index: -1;
`;
