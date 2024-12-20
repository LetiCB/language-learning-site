import React from "react";
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";
import Card from "src/components/Card/Card";
import { LearnPageContainer, LearnPageGrid } from "./LearnPage.styles";
import Songs from "./../images/songs.png"

const LearnPage: React.FC = () => {
  const navigate = useNavigate();
  const { language } = useParams<{ language: string }>();

  return (
    <LearnPageContainer>
      <h1>Aprendamos {language}</h1>
      <LearnPageGrid>
        <Card
          image={Songs}
          title="Cantemos canciones"
          onClick={() => navigate(`/${language}/canciones`)}
        />
      </LearnPageGrid>
    </LearnPageContainer>
  );
};

export default LearnPage;
