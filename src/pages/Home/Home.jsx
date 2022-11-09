import { MoviesList } from 'components/MoviesList';
import { Title } from './Home.styled';

const Home = () => {
  return (
    <main>
      <Title>Trending today</Title>
      <MoviesList />
    </main>
  );
};

export default Home;
