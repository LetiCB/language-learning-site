import styled from "styled-components";

export const LyricsSectionContainer = styled.div`
  margin-top: 2rem;
  display: flex;
  flex-direction: column;
`;

export const LineContainer = styled.div`
  margin-bottom: 2.7rem;
  width: 100%;
  text-align: left;
`;

export const LineText = styled.p`
  font-size: 1rem;
  font-weight: 550;
  color: #333;
`;

export const OptionsContainer = styled.div`
  display: flex;
  gap: 1rem;
  margin-top: 0.5rem;
`;

export const OptionButton = styled.button<{ selected: boolean }>`
  padding: 0.5rem 1rem;
  font-size: 1rem;
  border: ${({ selected }) => (selected ? "3px solid #6d4b5f" : "1px solid #ccc")};
  border-radius: 0.5rem;
  background-color: ${({ selected }) => (selected ? "#fbdada6b" : "white")};
  border-radius: 0.5rem;
  color: #6d4b5f;
  cursor: pointer;
  transition: background-color 0.3s, transform 0.2s;

  &:hover {
    background-color: #fbdada;
    color: #6d4b5f;
    transform: scale(1.05);
  }
`;

export const Input = styled.input`
  width: 100%;
  max-width: 400px;
  padding: 0.5rem;
  font-size: 1rem;
  border: 2px solid #ccc;
  border-radius: 0.5rem;
  margin-top: 0.5rem;

  &:focus {
    outline: none;
    border-color: #6d4b5f;
    box-shadow: 0 0 5pxrgb(97, 65, 84);
  }
`;

export const Feedback = styled.p<{ correct: boolean}>`
  font-size: 1rem;
  margin-top: 0.5rem;
  color: ${({ correct }) => (correct ? "#4caf50" : "#6d4b5f")};
`;

export const ActionContainer = styled.div`
  height: 12rem;
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

export const ActionButtonContainer = styled.div`
  margin: 2rem;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 3rem;
  font-size: 0.9rem;

  button {
    padding: 1rem 1.3rem;
    min-width: 12rem;
    font-size: 1rem;
    color: #333333;
    border-radius: 0.5rem;
    cursor: pointer;
  }
`;

export const VerifyButton = styled.button`
  border: 2px solid #f7c7c7;
  background-color: #fbdada;
  &:hover {
    border: 2px solid #6d4b5f;
  }
`;

export const ResetButton = styled.button`
  border: 2px solid #fbdada;
  background-color: #f5f0f0;
  &:hover {
    border: 2px solid #6d4b5f;
  }
`;
