import styled from 'styled-components'

export const HangmanPageContainer = styled.div`
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
