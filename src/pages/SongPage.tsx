import { useParams } from 'react-router-dom';
import { useState } from 'react';
import songs from '../data/songs.json';
import LyricsSection from 'src/components/LyricsSection/LyricsSection';
import { DifficultyContainer, LyricsContainer, OptionsContainer, SongPageContainer, TitleContainer } from './SongPage.styles';
import FloatingVideo from 'src/components/FloatingVideo/FloatingVideo';

const SongPage = () => {
    const { cancionesTitle } = useParams();
    const song = songs.find(song => song.title === cancionesTitle);
    const [difficulty, setDifficulty] = useState('easy');
  
    if (!song) return <p>Ups... no encontramos la canción</p>;   
  
    return (
      <SongPageContainer>
        <FloatingVideo videoId={song.url} />
        <TitleContainer>
          <h1>{song.title}</h1>
          <h2>{song.artist}</h2>
        </TitleContainer>
        <DifficultyContainer>
            <hr />
            <OptionsContainer>
                Elegí un nivel de dificultad:
                <button
                    onClick={() => setDifficulty("easy")}
                    className={difficulty === "easy" ? "selected" : ""}
                >
                    Fácil
                </button>
                <button
                    onClick={() => setDifficulty("intermediate")}
                    className={difficulty === "intermediate" ? "selected" : ""}
                >
                    Intermedio
                </button>
                <button
                    onClick={() => setDifficulty("hard")}
                    className={difficulty === "hard" ? "selected" : ""}
                >
                    Difícil
                </button>
            </OptionsContainer>
            <hr />
        </DifficultyContainer>
        <LyricsContainer>
          <LyricsSection song={song} difficulty={difficulty} />
        </LyricsContainer>
      </SongPageContainer>
    );
  };

  export default SongPage;
