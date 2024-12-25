import styled from "styled-components";

export const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.7);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
`;

export const ModalContainer = styled.div`
  background: white;
  border-radius: 0.5rem;
  width: 25rem;
  max-width: 90%;
  padding: 1.25rem;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  text-align: center;
`;

export const ModalTitle = styled.h2`
  margin: 0 0 0.625rem;
`;

export const ModalMessage = styled.p`
  margin: 0 0 1.25rem;
`;

export const ModalButtonContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 1.25rem;

  button {
    color: #333333;
    border-radius: 4px;
    padding: 0.625rem 1.25rem;
    font-size: 1rem;
    cursor: pointer;
  }
`;

export const PrimaryButton = styled.button`
  background-color: #fbdada;
  border: 2px solid #f7c7c7;
  
  &:hover {
    border: 2px solid #6d4b5f;
  }
`;

export const SecondaryButton = styled.button`
  background-color: #f5f0f0;
  color: #333333;
  border: 2px solid #fbdada;
    
  &:hover {
    border: 2px solid #6d4b5f;
  }
`;
