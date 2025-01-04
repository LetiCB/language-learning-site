import React from "react";
import { useNavigate } from "react-router-dom";
import { Branding, HeaderContainer, HeaderIcons } from "./Header.styles";
import LanguageSelector from "../LanguageSelector/LanguageSelector";
import { useLanguage } from "src/context/LanguageContext";

interface HeaderProps {
    children?: React.ReactNode;
}

const Header: React.FC<HeaderProps> = ({ children}) => {
    const navigate = useNavigate();
    const { selectedLanguage, setSelectedLanguage } = useLanguage();

    const handleLanguageChange = (language: string) => {
        setSelectedLanguage(language);
        const languagePath = language.toLowerCase();
        navigate(`/${languagePath}`);
      };

    return (
        <HeaderContainer role="banner">
        <Branding>
        Aprendamos{" "}
            <LanguageSelector
                selectedLanguage={selectedLanguage}
                languages={["Inglés", "Francés", "Italiano", "Portugués"]}
                onLanguageChange={handleLanguageChange}
            />
        </Branding>
        <HeaderIcons>{children}</HeaderIcons>
      </HeaderContainer> 
    )
}

export default Header;
