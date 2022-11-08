import { useEffect, useState } from 'react';
import { getTrendingMovies } from 'requests/getApi';
import { MovieItem } from './MovieItem';
import { List, Error } from './MoviesList.styled';

export const MoviesList = () => {
  const [moviesList, setMoviesList] = useState([]);
  const [error, setError] = useState(null);
  const [status, setStatus] = useState('');

  useEffect(() => {
    getTrendingMovies()
      .then(res => {
        setMoviesList(res.results);
        setStatus('resolved');
      })
      .catch(error => {
        setError(error);
        setStatus('rejected');
      });
  }, []);

  if (status === 'rejected') {
    return <Error>{error.message}</Error>;
  }

  if (status === 'resolved') {
    return (
      <List>
        {moviesList.map(({ id, title }) => (
          <MovieItem key={id} title={title} movieId={id} />
        ))}
      </List>
    );
  }
};
