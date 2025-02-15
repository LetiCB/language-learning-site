import React, { useEffect, useState } from 'react'
import { GlitchText, NotificationContainer } from './HackerMessage.styled'

const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890!@#$%^&*'.split('')

type HackerEffectProps = {
  text: string
}

const HackerMessage: React.FC<HackerEffectProps> = ({ text }) => {
  const [displayedText, setDisplayedText] = useState(text.split(''))
  const [letterCount, setLetterCount] = useState(0)
  const [finished, setFinished] = useState(false)
  const [isVisible, setIsVisible] = useState(true)
  const [isGlitching, setIsGlitching] = useState(false)

  useEffect(() => {
    if (!isVisible || finished) return

    const randomizer = setInterval(() => {
      setDisplayedText((prevText) =>
        prevText.map((char, i) =>
          i >= letterCount
            ? alphabet[Math.floor(Math.random() * alphabet.length)]
            : char,
        ),
      )
    }, 75)

    const revealLetter = setTimeout(() => {
      setDisplayedText((prevText) => {
        const newText = [...prevText]
        newText[letterCount] = text[letterCount]
        return newText
      })
      setLetterCount((prev) => prev + 1)
    }, 600)

    if (letterCount >= text.length) {
      setFinished(true)

      setTimeout(() => {
        setIsGlitching(true)
      }, 4000)

      setTimeout(() => {
        setIsVisible(false)
      }, 5000)
    }

    return () => {
      clearInterval(randomizer)
      clearTimeout(revealLetter)
    }
  }, [letterCount, finished, text, isVisible])

  return (
    <NotificationContainer isVisible={isVisible}>
      {displayedText.map((char, index) => (
        <GlitchText key={index} isGlowing={index < letterCount} isGlitching={isGlitching}>
          {char}
        </GlitchText>
      ))}
    </NotificationContainer>
  );
}

export default HackerMessage
