import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Card from "src/components/Card/Card";
import { languages } from "src/data/languages";
import { useLanguage } from "src/context/LanguageContext";
import { ListContainer, ListGrid } from "./styles/ListPage.styles";

const HomePage: React.FC = () => {
  const navigate = useNavigate();
  const { setSelectedLanguage } = useLanguage();

  useEffect(() => {
    setSelectedLanguage("Idiomas");
  }, [setSelectedLanguage]);

  const handleLanguageSelect = (language: string) => {
    const languagePath = language.toLowerCase();
    setSelectedLanguage(language);
    navigate(`/${languagePath}`);
  };

  return (
    <ListContainer>
      <h1>Elige un idioma para comenzar</h1>
      <ListGrid>
      {languages.map((language) => (
        <Card
          key={language.id}
          image={language.image}
          title={language.title}
          subtitle={language.subtitle}
          description={language.description}
          onClick={() => handleLanguageSelect(language.title)}
          variant="round"
        />
      ))}
      </ListGrid>
    </ListContainer>
  );
};

export default HomePage;
