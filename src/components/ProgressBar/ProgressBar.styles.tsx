import styled from "styled-components";

export const ProgressBarContainer = styled.div`
  width: 100%;
  background-color: #f1f1f1;
  border-radius: 5px;
  margin: 10px 0;
  overflow: hidden;
`;

export const Progress = styled.div<{ percentage: number }>`
  width: ${({ percentage }) => percentage}%;
  height: 0.625rem;
  background-color: #4caf50;
  transition: width 0.3s ease-in-out;
`;