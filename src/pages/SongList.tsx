import { useNavigate, useParams } from 'react-router-dom';
import songs from '../data/songs.json';
import Card from 'src/components/Card/Card';
import { SongListContainer, SongListGrid } from './SongList.styles';

const SongList = () => {
  const navigate = useNavigate();
  const { language } = useParams<{ language: string }>();
  const filteredSongs = songs.filter(song => song.language.toLowerCase() === language?.toLowerCase());

  return (
    <SongListContainer>
      <h1>Canciones en {language}</h1>
      <SongListGrid>
        {filteredSongs.map(song => (
          <Card
            key={song.id}
            title={song.title}
            description={song.artist}
            onClick={() => navigate(`/${language}/canciones/${song.title}`)}
            image={song.image ? `/images/${song.image}` : '/images/no-image.png'}
          />
        ))}
      </SongListGrid>
    </SongListContainer>
  );
};

export default SongList;
