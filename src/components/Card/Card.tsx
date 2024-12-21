import React from "react";
import { CardContainer, ImageContainer, Image, CardContent, Subtitle, Title, Description } from "./Card.styles";


interface CardProps {
    image?: string;
    title: string;
    subtitle?: string;
    description?: string;
    onClick?: () => void;
}

const Card: React.FC<CardProps> = ({ image, title, subtitle, description, onClick }) => {
  return (
    <CardContainer
      role="button"
      tabIndex={0}
      onClick={onClick}
      onKeyDown={(e) => {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          onClick?.();
        }
      }}
    >
      <ImageContainer>
      {image &&<Image src={image} alt={title} />}
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
