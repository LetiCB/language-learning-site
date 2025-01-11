import React, { useState } from 'react'
import {
  Card,
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

const CardDeck: React.FC<TriviaProps> = ({ questions }) => {
    const [visibleCards, setVisibleCards] = useState<number[]>(() =>
      Array.from({ length: questions.length }, (_, i) => i) // Tarjetas en orden natural
    );
    const [removedCards, setRemovedCards] = useState<number[]>([]);
    const [animationState, setAnimationState] = useState<Record<number, string>>({});
  
    const removeTopCard = () => {
      if (visibleCards.length > 0) {
        const topCardIndex = visibleCards[visibleCards.length - 1]; // Última tarjeta visible
        setAnimationState((prev) => ({ ...prev, [topCardIndex]: 'isOffscreenLeft' }));
  
        // Realizamos la actualización tras la animación
        setTimeout(() => {
          setVisibleCards((prev) => prev.slice(0, -1)); // Quitamos la tarjeta visible de la pila
          setRemovedCards((prev) => [topCardIndex, ...prev]); // Agregamos la tarjeta removida a la otra pila
        }, 500);
      }
    };
  
    const addNewCard = () => {
      if (removedCards.length > 0) {
        const lastRemovedIndex = removedCards[0]; // Última tarjeta removida
        setAnimationState((prev) => ({ ...prev, [lastRemovedIndex]: 'isOffscreenRight' }));
  
        // Realizamos la actualización tras la animación
        setTimeout(() => {
          setRemovedCards((prev) => prev.slice(1)); // Quitamos la tarjeta del inicio de removedCards
          setVisibleCards((prev) => [...prev, lastRemovedIndex]); // Agregamos la tarjeta al final de visibleCards
          setAnimationState((prev) => ({ ...prev, [lastRemovedIndex]: '' })); // Reseteamos animación
        }, 10);
      }
    };
  
    const isLeftDisabled = removedCards.length === 0;
    const isRightDisabled = visibleCards.length === 0;
  
    return (
      <Container>
        <DeckContainer>
          {visibleCards.map((index, order) => (
            <Card
              key={index}
              isOffscreenLeft={animationState[index] === 'isOffscreenLeft'}
              isOffscreenRight={animationState[index] === 'isOffscreenRight'}
              rotation={getRandomRotation(order)}
            >
              <CardHeader>
                <h3>{questions[index].question}</h3>
              </CardHeader>
            </Card>
          ))}
          <LeftArrow onClick={addNewCard} disabled={isLeftDisabled}>
            &larr;
          </LeftArrow>
          <RightArrow onClick={removeTopCard} disabled={isRightDisabled}>
            &rarr;
          </RightArrow>
        </DeckContainer>
      </Container>
    );
  };
  
  const getRandomRotation = (index: number) => {
    return index % 2 === 0 ? Math.random() * 5 : -Math.random() * 5;
  };
  
  export default CardDeck;
