import { Panel } from "./NotificationPanel.styles";

const NotificationPanel = ({ message }: { message: string }) => {
  return <Panel>{message}</Panel>;
};
  
export default NotificationPanel;
