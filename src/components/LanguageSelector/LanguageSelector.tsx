import React, { useState } from "react";
import { Chevron, DropdownContainer, DropdownItem, DropdownMenu, SelectedLanguage } from "./LanguageSelector.styles";

interface LanguageSelectorProps {
  selectedLanguage: string;
  languages: string[];
  onLanguageChange: (language: string) => void;
}

const LanguageSelector: React.FC<LanguageSelectorProps> = ({
  selectedLanguage,
  languages,
  onLanguageChange,
}) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => setIsOpen(!isOpen);

  const handleLanguageSelect = (language: string) => {
    onLanguageChange(language);
    setIsOpen(false);
  };

  return (
    <DropdownContainer onClick={toggleDropdown}>
      <SelectedLanguage>
        {selectedLanguage}
        <Chevron isOpen={isOpen}>▼</Chevron>
      </SelectedLanguage>
      {isOpen && (
        <DropdownMenu>
          {languages.map((language) => (
            <DropdownItem
              key={language}
              onClick={() => handleLanguageSelect(language)}
            >
              {language}
            </DropdownItem>
          ))}
        </DropdownMenu>
      )}
    </DropdownContainer>
  );
};

export default LanguageSelector;
