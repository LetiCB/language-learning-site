import { useNavigate, useParams } from 'react-router-dom';
import songs from '../data/songs.json';
import Card from 'src/components/Card/Card';

const SongList = () => {
  const navigate = useNavigate();
  const { language } = useParams<{ language: string }>();
  const filteredSongs = songs.filter(song => song.language.toLowerCase() === language?.toLowerCase());

  return (
    <div>
      <h1>{language} Songs</h1>
      <div className="card-container">
        {filteredSongs.map(song => (
          <Card
            key={song.id}
            title={song.title}
            description={song.artist}
            onClick={() => navigate(`/${language}/songs/${song.id}`)}
          />
        ))}
      </div>
    </div>
  );
};

export default SongList;
