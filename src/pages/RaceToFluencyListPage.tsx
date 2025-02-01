import { useNavigate, useParams } from 'react-router-dom';
import raceToFluencyGames from '../data/race-to-fluency.json';
import Card from 'src/components/Card/Card';
import { RaceToFluencyListContainer, RaceToFluencyListGrid } from './RaceToFluencyListPage.styles';

const RaceToFluencyList = () => {
  const navigate = useNavigate();
  const { language } = useParams<{ language: string }>();
  const filteredGames = raceToFluencyGames.filter(game => game.language.toLowerCase() === language?.toLowerCase());

  return (
    <RaceToFluencyListContainer>
      <h1>Carreras a la fluidez en {language}</h1>
      <RaceToFluencyListGrid>
        {filteredGames.map(game => (
          <Card
            key={game.id}
            title={game.theme}
            description={game.description}
            onClick={() => navigate(`/${language}/carrera-hacia-la-fluidez/${game.theme}`)}
            image={game.image ? `/images/carrera-hacia-la-fluidez/${game.image}` : '/images/no-image.png'}
            variant="round"
          />
        ))}
      </RaceToFluencyListGrid>
    </RaceToFluencyListContainer>
  );
};

export default RaceToFluencyList;
