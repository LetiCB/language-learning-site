import styled from "styled-components";

export const HomeContainer = styled.div`
  text-align: center;
  margin-top: 20px;
`;

export const LanguageGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
  gap: 20px;
  padding: 20px;
`;
