import styled from "styled-components";

export const GameContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

export const KeyboardContainer = styled.div`
  width: 90%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const RightColumnContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  align-self: center;
  gap: 2rem;
  padding: 2rem;
`;

export const RemainingAttempts = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Number = styled.p<{ isLastAttempts?: boolean }>`
  font-size: 2.5rem;
  color: ${({ isLastAttempts }) => (isLastAttempts ? 'red' : 'black')};
`;
