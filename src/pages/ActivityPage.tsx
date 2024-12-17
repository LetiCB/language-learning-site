import React from "react";
import { useParams } from "react-router-dom";

const ActivityPage: React.FC = () => {
  const { language, activity } = useParams<{ language: string; activity: string }>();

  return (
    <div>
      <h1>Actividad: {activity} ({language})</h1>
    </div>
  );
};

export default ActivityPage;
