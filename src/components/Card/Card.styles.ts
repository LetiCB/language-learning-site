import styled from "styled-components";

export const CardContainer = styled.div`
  max-width: 25rem;
  background-color: #ffffff;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  padding: 20px;
  text-align: center;
  cursor: pointer;
  transition: transform 0.2s, box-shadow 0.2s;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 6px 8px rgba(0, 0, 0, 0.15);
  }
`;

export const ImageContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 15px;
`;

export const Image = styled.img`
  width: 80px;
  height: 80px;
  border-radius: 50%;
  object-fit: cover;
`;

export const CardContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Title = styled.h3`
  font-size: 1.2rem;
  margin: 0;
  color: #333;
`;

export const Subtitle = styled.h4`
  font-size: 1rem;
  margin: 5px 0;
  color: #666;
`;

export const Description = styled.p`
  font-size: 0.9rem;
  margin: 0;
  color: #999;
`;
