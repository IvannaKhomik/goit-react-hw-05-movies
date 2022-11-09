import { useState } from 'react';
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { getMoviesByQuery } from 'requests/getApi';
import {
  List,
  Error,
  MovieName,
  StyledLink,
  NoResultCard,
} from './FilteredMoviesList.styled';

export const FilteredMoviesList = ({ query }) => {
  const [moviesList, setMoviesList] = useState([]);
  const [error, setError] = useState(null);
  const [status, setStatus] = useState('');

  const location = useLocation();

  useEffect(() => {
    if (!query) {
      return;
    }

    getMoviesByQuery(query)
      .then(res => {
        setMoviesList(res.results);
        setStatus('resolved');
      })
      .catch(error => {
        setError(error);
        setStatus('rejected');
      });
  }, [query, setMoviesList]);

  if (status === 'rejected') {
    return <Error>{error.message}</Error>;
  }

  if (status === 'resolved') {
    const noResults = moviesList.length === 0;
    return noResults ? (
      <NoResultCard>
        {' '}
        Sorry, we didn't find any movies by your request
      </NoResultCard>
    ) : (
      <List>
        {moviesList.map(({ id, title }) => {
          return (
            <MovieName key={id}>
              <StyledLink to={`${id}`} state={{ from: location }}>
                {title}
              </StyledLink>
            </MovieName>
          );
        })}
      </List>
    );
  }
};
