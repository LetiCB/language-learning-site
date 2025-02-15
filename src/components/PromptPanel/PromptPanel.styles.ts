import styled from "styled-components";

export const Container = styled.div`
  position: relative;
  overflow: hidden;
  width: 100%;
  height: 10rem;
  border-bottom: 1px solid #fbdada;
  box-shadow: 0px 4px 6px rgb(195 181 181 / 10%);
`;

export const Panel = styled.div`
  position: absolute;
  width: 100%;
  padding: 1.5rem;
  background: linear-gradient(to bottom, #f9ecec, #ffffff);
  text-align: center;
  font-size: 1.1rem;
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

  h3 {
    font-size: 1.5rem;
    margin-bottom: 0.5rem;
    color: #d81b60;
  }
`;
