import { Panel } from "./PromptPanel.styles";

const PromptPanel = ({ prompt }: { prompt: string }) => {
  return (
    <Panel>
      <h3>¡Desafío!</h3>
      <p>{prompt}</p>
    </Panel>
  );
};
  
export default PromptPanel;
