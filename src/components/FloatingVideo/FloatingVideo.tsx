import React, { useState } from 'react';
import { FloatingVideoContainer } from './FloatingVideo.styles';

interface VideoProps {
    videoId: string;
  }
  
  const FloatingVideo: React.FC<VideoProps> = ({ videoId }) => {
    const [position, setPosition] = useState({ x: 50, y: 150 });
    const [dragging, setDragging] = useState(false);
    const [offset, setOffset] = useState({ x: 0, y: 0 });
  
    const handleMouseDown = (e: React.MouseEvent<HTMLDivElement>) => {
      setDragging(true);
      setOffset({
        x: e.clientX - position.x,
        y: e.clientY - position.y,
      });
    };
  
    const handleMouseMove = (e: MouseEvent) => {
      if (!dragging) return;
  
      setPosition({
        x: e.clientX - offset.x,
        y: e.clientY - offset.y,
      });
    };
  
    const handleMouseUp = () => {
      setDragging(false);
    };
  
    React.useEffect(() => {
      document.addEventListener("mousemove", handleMouseMove);
      document.addEventListener("mouseup", handleMouseUp);
  
      return () => {
        document.removeEventListener("mousemove", handleMouseMove);
        document.removeEventListener("mouseup", handleMouseUp);
      };
    }, [dragging, offset]);
  
    const videoUrl = `https://www.youtube.com/embed/${videoId}?autoplay=1&rel=0&modestbranding=1`;
  
    return (
      <FloatingVideoContainer
        className={dragging ? "dragging" : ""}
        style={{ top: `${position.y}px`, left: `${position.x}px` }}
        onMouseDown={handleMouseDown}
      >
        <iframe
          src={videoUrl}
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        ></iframe>
      </FloatingVideoContainer>
    );
  };
  
export default FloatingVideo;
