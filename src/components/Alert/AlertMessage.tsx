import React, { useEffect } from "react";
import { AlertContainer } from "./AlertMessage.styles";

type AlertMessageProps = {
  message: string;
  type: "success" | "error";
  onClose: () => void;
};

const AlertMessage: React.FC<AlertMessageProps> = ({ message, type, onClose }) => {
  useEffect(() => {
    const timeout = setTimeout(onClose, 3000);
    return () => clearTimeout(timeout);
  }, [onClose]);

  return <AlertContainer type={type}>{message}</AlertContainer>;
};

export default AlertMessage;
