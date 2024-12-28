import { Progress, ProgressBarContainer } from "./ProgressBar.styles";
import { useProgress } from "src/context/ProgressContext";

type ProgressBarProps = {
  correctItems: number;
  totalItems: number;
};

const ProgressBar: React.FC<ProgressBarProps> = ({ correctItems, totalItems }) => {
  const context = useProgress();

  const total = totalItems ?? context.totalItems;
  const correct = correctItems ?? context.correctItems;

  const percentage = total > 0 ? (correct / total) * 100 : 0;

  return (
    <ProgressBarContainer>
      <Progress percentage={percentage} />
    </ProgressBarContainer>
  );
};

export default ProgressBar;
