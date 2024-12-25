import React from "react";
import { CardContainer, ImageContainer, CardContent, Subtitle, Title, Description, RoundImage, RectangularImage } from "./Card.styles";


interface CardProps {
    image?: string;
    title: string;
    subtitle?: string;
    description?: string;
    onClick?: () => void;
    variant?: "round";
    children?: React.ReactNode;
}

const Card: React.FC<CardProps> = ({ image, title, subtitle, description, onClick, variant, children }) => {
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
        {image && (
          variant === "round" 
          ? <RoundImage src={image} alt={title} /> 
          : <RectangularImage src={image} alt={title} />
        )}
      </ImageContainer>
      <CardContent>
        <Title>{title}</Title>
        {subtitle && <Subtitle>{subtitle}</Subtitle>}
        {description && <Description>{description}</Description>}
        {children && <div>{children}</div>}
      </CardContent>
    </CardContainer>
  );
};

export default Card;
