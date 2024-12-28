import styled from "styled-components";

export const DropZoneContainer = styled.div`
  padding: 20px;
  margin: 10px;
  border: 2px dashed #ccc;
  border-radius: 5px;
  min-height: 150px;
  text-align: center;
  background-color: #f7f7f7; /* O un color visualmente claro */
  transition: background-color 0.3s ease;
  
  &:hover {
    background-color: #e0e0e0;
  }
`;
