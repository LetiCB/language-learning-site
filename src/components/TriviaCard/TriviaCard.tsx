import React, { useState } from 'react'
import {
  BodyMessage,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Container,
  DeckContainer,
  LeftArrow,
  RightArrow,
} from './TriviaCard.styles'

interface Questions {
  question: string
  answers: string[]
}

interface TriviaProps {
  questions: Questions[]
}

// const TriviaCard: React.FC<TriviaProps> = ({ questions }) => {
const CardDeck: React.FC<TriviaProps> = ({ questions }) => {
  const [visibleCards, setVisibleCards] = useState<number[]>([0]);
  const [animationState, setAnimationState] = useState<Record<number, string>>({});
  
  const addNewCard = () => {
    if (visibleCards.length < questions.length) {
      const nextIndex = visibleCards.length;
      setAnimationState((prev) => ({ ...prev, [nextIndex]: 'isOffscreenRight' }));
      setVisibleCards((prev) => [...prev, nextIndex]);
      setTimeout(() => {
        setAnimationState((prev) => ({ ...prev, [nextIndex]: '' }));
      }, 10);
    }
  };
  
  const removeTopCard = () => {
    if (visibleCards.length > 0) {
      const topCardIndex = visibleCards[visibleCards.length - 1];
      setAnimationState((prev) => ({ ...prev, [topCardIndex]: 'isOffscreenLeft' }));
      setTimeout(() => {
        setVisibleCards((prev) => prev.slice(0, -1));
      }, 500);
    }
  }; 

  return (
    <Container>
      <DeckContainer>
        {visibleCards.map((index) => (
          <Card
            key={index}
            isOffscreenLeft={animationState[index] === 'isOffscreenLeft'}
            isOffscreenRight={animationState[index] === 'isOffscreenRight'}
            rotation={index % 2 === 0 ? 5 : -5} // Alternating rotation
          >
            <CardHeader>
              <p>{questions[index].question}</p>
            </CardHeader>
          </Card>
        ))}
        <LeftArrow onClick={addNewCard}>&larr;</LeftArrow>
        <RightArrow onClick={removeTopCard}>&rarr;</RightArrow>
      </DeckContainer>
    </ Container>
  )
}

export default CardDeck
