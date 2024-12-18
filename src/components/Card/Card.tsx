import React from "react";
import { CardContainer, ImageContainer, Image, CardContent, Subtitle, Title, Description } from "./Card.styles";


interface CardProps {
    image: string;
    title: string;
    subtitle?: string;
    description?: string;
    onClick?: () => void;
}

const Card: React.FC<CardProps> = ({ image, title, subtitle, description, onClick }) => {
  return (
    <CardContainer onClick={onClick}>
      <ImageContainer>
        <Image src={image} alt={title} />
      </ImageContainer>
      <CardContent>
        <Title>{title}</Title>
        {subtitle && <Subtitle>{subtitle}</Subtitle>}
        {description && <Description>{description}</Description>}
      </CardContent>
    </CardContainer>
  );
};

export default Card;
