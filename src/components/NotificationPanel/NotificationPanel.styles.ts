import styled from "styled-components";

export const Wrapper = styled.div`
  position: relative;
  overflow: hidden;
  width: 100%;
  height: 3.125rem;
  border-bottom: 1px solid #fbdada;
  box-shadow: 0px 4px 6px rgb(195 181 181 / 10%);
`;

export const Panel = styled.div`
  position: absolute;
  width: 100%;
  padding: 1rem;
  background: white;
  text-align: center;
  font-size: 1rem;
  font-weight: 500;
  color: #e91e63;
  transition: transform 0.5s ease-in-out, opacity 0.5s;

  &.enter {
    transform: translateX(0);
    opacity: 1;
  }

  &.exit {
    transform: translateX(-100%);
    opacity: 0;
  }
`;
