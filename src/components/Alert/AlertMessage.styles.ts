import styled from "styled-components";

export const AlertContainer = styled.div<{ type: string }>`
  position: fixed;
  top: 20px;
  right: 20px;
  padding: 15px 20px;
  border-radius: 8px;
  background-color: ${({ type }) =>
    type === "success" ? "#d4edda" : "#f8d7da"};
  color: ${({ type }) => (type === "success" ? "#155724" : "#721c24")};
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  z-index: 1000;
  font-size: 16px;
`;