import React from "react";
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";
import Card from "src/components/Card/Card";
import Songs from "./../images/songs.png";
import DragAndDrop from "./../images/drag-and-drop.png";
import Hangman from "./../images/hangman.png";
import Trivia from "./../images/trivia.png";
import { ListContainer, ListGrid } from "./styles/ListPage.styles";

const LearnPage: React.FC = () => {
  const navigate = useNavigate();
  const { language } = useParams<{ language: string }>();

  return (
    <ListContainer>
      <h1>Aprendamos {language}</h1>
      <ListGrid>
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
          onClick={() => navigate(`/${language}/ahorcado`)}
          variant="round"
        />
        <Card
          image={Trivia}
          title="Trivia"
          onClick={() => navigate(`/${language}/trivia`)}
          variant="round"
        />
      </ListGrid>
    </ListContainer>
  );
};

export default LearnPage;
