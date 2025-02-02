import { useState, useEffect } from "react";
import { Panel, Wrapper } from "./NotificationPanel.styles";

interface NotificationProps {
  message: string;
}

const NotificationPanel = ({ message }: NotificationProps) => {
  const [displayedMessage, setDisplayedMessage] = useState(message);
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    if (message !== displayedMessage) {
      setIsAnimating(true);

      setTimeout(() => {
        setDisplayedMessage(message);
        setIsAnimating(false);
      }, 500);
    }
  }, [message]);

  return (
    <Wrapper>
      <Panel className={isAnimating ? "exit" : "enter"}>{displayedMessage}</Panel>
    </Wrapper>
  );
};

export default NotificationPanel;
