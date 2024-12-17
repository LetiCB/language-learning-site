import React from "react";
import { useParams } from "react-router-dom";

const LearnPage: React.FC = () => {
  const { language } = useParams<{ language: string }>();

  return (
    <div>
      <h1>Aprendamos {language}</h1>
    </div>
  );
};

export default LearnPage;
