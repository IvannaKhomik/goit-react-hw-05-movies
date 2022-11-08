import { MoviesList } from 'components/MoviesList';
import { Title } from './Home.styled';

export const Home = () => {
  return (
    <main>
      <Title>Trending today</Title>
      <MoviesList />
    </main>
  );
};
