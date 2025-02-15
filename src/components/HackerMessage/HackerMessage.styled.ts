import styled, { keyframes, css } from "styled-components";

const fadeIn = keyframes`
  from { opacity: 0; }
  to { opacity: 1; }
`;

const fadeOut = keyframes`
  from { opacity: 1; }
  to { opacity: 0; }
`;

export const NotificationContainer = styled.div<{ isVisible: boolean }>`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  display: ${({ isVisible }) => (isVisible ? "flex" : "none")};
  justify-content: center;
  align-items: center;
  background: #111;
  color: #f00;
  font-family: Consolas, Courier, monospace;
  font-size: 60px;
  text-shadow: 0 0 15px #f00;
  
  animation: ${({ isVisible }) =>
    isVisible
      ? css`${fadeIn} 1s ease-in-out`
      : css`${fadeOut} 1s ease-in-out`};
`;

const glitch = keyframes`
  0% { transform: skew(0deg, 0deg); }
  20% { transform: skew(-5deg, 3deg); }
  40% { transform: skew(5deg, -3deg); }
  60% { transform: skew(-3deg, 2deg); }
  80% { transform: skew(3deg, -2deg); }
  100% { transform: skew(0deg, 0deg); }
`;

export const GlitchText = styled.span<{ isGlowing: boolean; isGlitching: boolean }>`
  display: inline-block;
  padding: 0 10px;
  width: 1ch;
  text-align: center;
  animation: ${({ isGlitching }) =>
    isGlitching ? css`${glitch} 0.1s infinite alternate` : "none"};

  color: ${({ isGlitching, isGlowing }) => 
    isGlitching ? "#fff" : isGlowing ? "#f00" : "#700"};

  text-shadow: ${({ isGlitching, isGlowing }) => 
    isGlitching 
      ? "2px 2px 5px #0ff, -2px -2px 5px #f0f"  
      : isGlowing 
      ? "0px 0px 10px #f00"  
      : "0px 0px 5px #700"};
`;
