import styled from "styled-components";

export const BoardContainer = styled.div`
  display: flex;
  flex-direction: row;
  gap: 3rem;
  padding: 20px;
  width: 100%;
//   height: 100%;
`;

export const CategoriesContainer = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  gap: 20px;
  background-color: #f7f7f7;
  padding: 1.5rem;
  border-radius: 8px;
  border: 1px solid #ddd;
`;

export const ItemsContainer = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  gap: 10px;
  background-color: #f0f0f0;
  padding: 1.5rem;
  border-radius: 8px;
  border: 1px solid #ddd;
`;
