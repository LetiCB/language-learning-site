import styled from "styled-components";

export const BoardContainer = styled.div`
  display: flex;
  flex-direction: row;
  gap: 3rem;
  padding: 1.25rem;
  width: 100%;
//   height: 100%;

  @media (min-width: 768px) {
      flex-direction: row;
      gap: 3rem;
  }
`;

export const CategoriesContainer = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  gap: 1.25rem;
  background-color: #f7f7f7;
  padding: 1.5rem;
  border-radius: 0.5rem;
  border: 1px solid #ddd;
`;

export const ItemsContainer = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  gap: 0.625rem;
  background-color: #f0f0f0;
  padding: 1.5rem;
  border-radius: 0.5rem;
  border: 1px solid #ddd;
`;
