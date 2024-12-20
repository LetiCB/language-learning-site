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
    border-color: #ab1c1c;
    box-shadow: 0 0 5px rgba(171, 28, 28, 0.5);
  }
`;
