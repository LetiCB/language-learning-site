import styled from "styled-components";

export const SongListContainer = styled.div`
  text-align: center;
  margin-top: 20px;
`;

export const SongListGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
  gap: 20px;
  padding: 20px;
`;