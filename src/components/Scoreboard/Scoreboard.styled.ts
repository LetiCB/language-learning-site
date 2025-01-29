import styled from "styled-components";

export const ScoreboardContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 2rem;
  align-items: center;
  padding: 15px;
  border: 5px solid #ffe0e9;
  border-radius: 10px;
  background-color: #ffffff;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  width: 8rem;
  margin: 0 auto;
`;

export const ScoreItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Label = styled.span`
  font-size: 1rem;
  font-weight: bold;
  color: #b04c63;
`;

export const Value = styled.span`
  font-size: 1.5rem;
  font-weight: bold;
  color: #6d4b5f;
`;
