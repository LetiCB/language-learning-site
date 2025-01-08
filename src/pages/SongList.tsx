import { useNavigate, useParams } from 'react-router-dom';
import songs from '../data/songs.json';
import Card from 'src/components/Card/Card';
import { ListContainer, ListGrid } from './styles/ListPage.styles';

const SongList = () => {
  const navigate = useNavigate();
  const { language } = useParams<{ language: string }>();
  const filteredSongs = songs.filter(song => song.language.toLowerCase() === language?.toLowerCase());

  return (
    <ListContainer>
      <h1>Canciones en {language}</h1>
      <ListGrid>
        {filteredSongs.map(song => (
          <Card
            key={song.id}
            title={song.title}
            description={song.artist}
            onClick={() => navigate(`/${language}/canciones/${song.title}`)}
            image={song.image ? `/images/songs/${song.image}` : '/images/songs/no-image.png'}
          />
        ))}
      </ListGrid>
    </ListContainer>
  );
};

export default SongList;
