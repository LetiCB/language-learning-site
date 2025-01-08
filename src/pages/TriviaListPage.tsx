import { useNavigate, useParams } from 'react-router-dom';
import trivias from '../data/trivia.json';
import Card from 'src/components/Card/Card';
import { ListContainer, ListGrid } from './styles/ListPage.styles';

const TriviaList = () => {
  const navigate = useNavigate();
  const { language } = useParams<{ language: string }>();
  const filteredTrivias = trivias.filter(trivia => trivia.language.toLowerCase() === language?.toLowerCase());

  return(
    <ListContainer>
      <h1>Trivias en {language}</h1>
      <ListGrid>
        {filteredTrivias.map(trivia => (
          <Card
          key={trivia.id}
          title={trivia.theme}
          description={trivia.description}
          onClick={() => navigate(`/${language}/trivia/${trivia.theme}`)}
          image={trivia.image ? `/images/trivia/${trivia.image}` : '/images/no-image.png'}
          variant="round"
        />
        ))}

      </ListGrid>
    </ListContainer>
  )
};

export default TriviaList;
