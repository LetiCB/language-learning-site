import styled from "styled-components";

export const BoardContainer = styled.div`
  width: 100%;
  background: #fff;
  padding: 1rem;
  text-align: left;
  border-bottom: 1px solid #fbdada;
  box-shadow: 0px 4px 6px rgb(195 181 181 / 10%);
`;

export const PlayerRow = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0.1rem 0;
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);

  &:last-child {
    border-bottom: none;
  }
`;

export const PlayerIcon = styled.div<{ color: string }>`
  width: 1rem;
  height: 1rem;
  border-radius: 50%;
  background-color: ${({ color }) => color};
  border: 0.125rem solid white;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.3);
`;

export const PlayerName = styled.span`
  flex: 1;
  margin-left: 1rem;
  font-size: 0.8rem;
  font-weight: 400;
  color: #333;
`;

export const PlayerPoints = styled.span`
  font-size: 0.8rem;
  font-weight: 500;
  color: #d81b60;
`;
