import styled from 'styled-components';

export const FloatingVideoContainer = styled.div`
  position: fixed;
  top: 50px;
  left: 50px;
  cursor: grab;

  iframe {
    width: 300px;
    height: 200px;
    border: none;
  }
`;