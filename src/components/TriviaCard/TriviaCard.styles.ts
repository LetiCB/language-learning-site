import styled, { css, keyframes } from 'styled-components';

export const Container = styled.div`
  display: flex;
  height: 500px;
`;

export const DeckContainer = styled.div`
  position: relative;
  width: 300px;
  height: 200px;
  margin: auto;
`;

export const Card = styled.div<{ 
    isOffscreenLeft?: boolean; 
    isOffscreenRight?: boolean;
    rotation?: number; 
  }>`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: white;
  border: 1px solid #ddd;
  box-shadow: 0 2px 8px -2px rgba(180, 177, 177, 0.1);
  transition: transform 0.5s ease-in-out, opacity 0.5s ease-in-out;
  transform: ${({ isOffscreenLeft, isOffscreenRight, rotation }) =>
    isOffscreenLeft
      ? 'translate(-1000px, 0) rotateZ(-20deg)'
      : isOffscreenRight
      ? 'translate(1000px, 0) rotateZ(30deg)'
      : `rotateZ(${rotation}deg)`};
  opacity: ${({ isOffscreenLeft, isOffscreenRight }) =>
    isOffscreenLeft || isOffscreenRight ? 0 : 1};
`;

export const CardHeader = styled.header`
  color: #333;
  font-size: 1.5rem;
  padding: 1rem;

  p {
    margin: 0;
  }
`;

export const CardBody = styled.div`
  padding: 1rem;
`;

export const CardFooter = styled.footer`
  position: absolute;
  bottom: 0;
  width: 100%;
  text-align: center;
  padding: 1rem;
  color: #aaa;
`;

export const BodyMessage = styled.p`
  color: #999;
  text-align: center;
  margin-top: 5em;
`;

export const ArrowButton = styled.button`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: #007bff;
  color: white;
  border: none;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.5rem;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);

  &:hover {
  background-color: #0056b3;
  }

  &:focus {
  outline: none;
  }
`;

export const LeftArrow = styled(ArrowButton)`
  left: -60px;
`;

export const RightArrow = styled(ArrowButton)`
  right: -60px;
`;