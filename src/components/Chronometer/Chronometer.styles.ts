import styled from "styled-components";

export const ChronometerContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #ffe0e9;
  border: 2px solid #b04c63;
  border-radius: 10px;
  padding: 20px;
  width: 200px;
`;

export const TimeDisplay = styled.div`
  font-size: 2rem;
  font-weight: bold;
  color: #b04c63;
  margin-bottom: 10px;
`;

export const ButtonsContainer = styled.div`
  display: flex;
  gap: 10px;
`;

export const Button = styled.button`
  background-color: #b04c63;
  color: #ffe0e9;
  border: none;
  border-radius: 5px;
  padding: 5px 10px;
  cursor: pointer;
  font-size: 1rem;

  &:hover {
    background-color: #ffe0e9;
    color: #b04c63;
    border: 2px solid #b04c63;
  }
`;
