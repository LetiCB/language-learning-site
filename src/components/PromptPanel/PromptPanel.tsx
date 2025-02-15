import { useEffect, useState } from "react";
import { Container, Panel } from "./PromptPanel.styles";

const PromptPanel = ({ prompt, onAnswer }: { prompt: string, onAnswer: (correct: boolean) => void }) => {
  const [displayedPrompt, setDisplayedPrompt] = useState(prompt);
  const [isAnimating, setIsAnimating] = useState(false);
  const [isVisible, setIsVisible] = useState(prompt !== "");

  useEffect(() => {
    if (prompt !== displayedPrompt) {
      setIsAnimating(true);

      setTimeout(() => {
        setDisplayedPrompt(prompt);
        setIsAnimating(false);
        setIsVisible(prompt !== "");
      }, 500);
    }
  }, [prompt]);

  console.log('isVisible??', isVisible);
  console.log('prompt', prompt);
  
  return (
    <Container>
      {isVisible && (
        <Panel className={isAnimating ? "exit" : "enter"}>
          <h3>¡Desafío!</h3>
          <p>{displayedPrompt}</p>
          <button onClick={() => onAnswer(true)}>✅</button>
          <button onClick={() => onAnswer(false)}>❌</button>
        </Panel>
      )}
    </Container>
  );
};
  
export default PromptPanel;
