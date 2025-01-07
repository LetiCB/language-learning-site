import styled from "styled-components";

export const DropZoneContainer = styled.div<{ categoryColor: string }>`
  padding: 1.25rem;
  margin: 0.625rem;
  border: 2px dashed ${({ categoryColor }) => categoryColor || "#ccc"};
  border-radius: 5px;
  min-height: 9rem;
  text-align: center;
  align-content: center;
  background-color: #f7f7f7;
  transition: background-color 0.3s ease;
  
  &:hover {
    background-color: #e0e0e0;
  }

  img {
    max-height: 7rem;
    width: auto;
    border-radius: 5px;
  }
`;
