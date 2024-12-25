import React from "react";
import {  
  ModalContainer, 
  ModalButtonContainer, 
  ModalMessage, 
  ModalTitle, 
  Overlay, 
  PrimaryButton,
  SecondaryButton
} from "./Modal.styles";

interface ModalProps {
  title?: string;
  message?: string;
  children?: React.ReactNode;
  primaryButtonText?: string;
  primaryButtonOnClick?: () => void;
  secondaryButtonText?: string;
  secondaryButtonOnClick?: () => void;
  onClose: () => void;
}

const Modal: React.FC<ModalProps> = ({
  title,
  message,
  children,
  primaryButtonText,
  primaryButtonOnClick,
  secondaryButtonText,
  secondaryButtonOnClick,
  onClose,
}) => {

  return (
    <Overlay 
      onClick={onClose}
    >
      <ModalContainer 
        onClick={(e) => e.stopPropagation()} 
        tabIndex={-1}
        role="dialog"
        aria-labelledby="modal-title"
        aria-describedby="modal-message"
      >
        {title && <ModalTitle id="modal-title">{title}</ModalTitle>}
        {message && <ModalMessage id="modal-message">{message}</ModalMessage>}
        {children}
        <ModalButtonContainer>
          {primaryButtonText && (
            <PrimaryButton onClick={primaryButtonOnClick}>{primaryButtonText}</PrimaryButton>
          )}
          {secondaryButtonText && (
            <SecondaryButton onClick={secondaryButtonOnClick}>{secondaryButtonText}</SecondaryButton>
          )}
        </ModalButtonContainer>
      </ModalContainer>
    </Overlay>
  );
};

export default Modal;
