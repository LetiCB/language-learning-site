import styled from "styled-components";

export const ListContainer = styled.div`
  text-align: center;
  margin-top: 1.25rem;
`;

export const ListGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(13rem, 1fr));
  gap: 1.25rem;
  padding: 1.25rem;
`;