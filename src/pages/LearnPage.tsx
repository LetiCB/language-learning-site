import React from "react";
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";
import Card from "src/components/Card/Card";
import { LearnPageContainer, LearnPageGrid } from "./LearnPage.styles";
import Songs from "./../images/songs.png";
import DragAndDrop from "./../images/drag-and-drop.png";
import Hangman from "./../images/hangman.png";

const LearnPage: React.FC = () => {
  const navigate = useNavigate();
  const { language } = useParams<{ language: string }>();

  return (
    <LearnPageContainer>
      <h1>Aprendamos {language}</h1>
      <LearnPageGrid>
        <Card
          image={Songs}
          title="Completar canciones"
          onClick={() => navigate(`/${language}/canciones`)}
          variant="round"
        />
        <Card
          image={DragAndDrop}
          title="Juegos de arrastre"
          onClick={() => navigate(`/${language}/juegos-de-arrastre`)}
          variant="round"
        />
        <Card
          image={Hangman}
          title="Juegos de ahorcado"
          onClick={() => navigate(`/${language}/ahoracado`)}
          variant="round"
        />
      </LearnPageGrid>
    </LearnPageContainer>
  );
};

export default LearnPage;
