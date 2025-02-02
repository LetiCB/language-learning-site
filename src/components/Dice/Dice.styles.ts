import styled from 'styled-components';

export const Container = styled.div`
  padding: 1rem 0;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 2rem;
  border-bottom: 1px solid #fbdada;
  box-shadow: 0px 4px 6px rgb(195 181 181 / 10%);
`;

export const DiceContainer = styled.div`
  position: relative;
  width: 6.25rem;
  height: 6.25rem;
  transform-style: preserve-3d;
  transition: transform 1s;
`;

export const Side = styled.div<{ position: string }>`
  position: absolute;
  background-color: #fbdada;
  border-radius: 5px;
  width: 6.25rem;
  height: 6.25rem;
  border: 1px solid #e5e5e5;
  text-align: center;
  line-height: 2em;
  transform: ${({ position }) => position};
`;

export const Dot = styled.div`
  position: absolute;
  width: 1.25rem;
  height: 1.25rem;
  margin: -0.625rem 0.3125rem 0.3125rem -0.625rem;
  border-radius: 1.25rem;
  background-color: #f25f5c;
  box-shadow: inset 2px 2px #d90429;
`;

export const Button = styled.button`
  color: #333333;
  border-radius: 4px;
  padding: 0.625rem 1.25rem;
  font-size: 1rem;
  cursor: pointer;
  box-shadow: 0px 0.25rem 0.375rem rgba(0, 0, 0, 0.1);
  transition: .3s; 
  background-color: #f5f0f0;
  border: 2px solid #fbdada;
    
  &:hover {
    border: 2px solid #6d4b5f;
  }
`;
