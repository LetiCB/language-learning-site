import { Progress, ProgressBarContainer } from "./ProgressBar.styles";
import { useProgress } from "src/context/ProgressContext";

const ProgressBar: React.FC = () => {
  const { correctItems, totalItems } = useProgress();

  const percentage = totalItems > 0 ? (correctItems / totalItems) * 100 : 0;

  return (
    <ProgressBarContainer>
      <Progress percentage={percentage} />
    </ProgressBarContainer>
  );
};

export default ProgressBar;
