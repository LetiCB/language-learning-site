import React from "react";
import { Branding, HeaderContainer, HeaderIcons } from "./Header.styles";

interface HeaderProps {
    branding?: React.ReactNode;
    children?: React.ReactNode;
}

const Header: React.FC<HeaderProps> = ({branding = "English", children}) => {
    return (
        <HeaderContainer role="banner">
        <Branding>Let's learn {branding}</Branding>
        <HeaderIcons>{children}</HeaderIcons>
      </HeaderContainer> 
    )
}

export default Header;