import React from "react";
import { Copyright, FooterContainer } from "./Footer.styles";

interface FooterProps {
    children?: React.ReactNode;
}

const Footer:React.FC<FooterProps> = ({ children }) => {
    return (
        <FooterContainer>
            <Copyright>&copy; {new Date().getFullYear()} Aprende idiomas. Todos los derechos reservados.</Copyright>
            {children}
        </FooterContainer>
    )
}

export default Footer;