import { useEffect } from 'react';
import { useState } from 'react';
import { getMovieDetails } from 'requests/getApi';

export const useKeyForSearch = (movieId, defaultValue, keySearch) => {
  const [movieDetails, setMovieDetails] = useState(defaultValue);
  const [error, setError] = useState(defaultValue);
  const [status, setStatus] = useState(defaultValue);

  const getMovie = (id, key) => {
    getMovieDetails(id, key)
      .then(res => {
        setMovieDetails(res);
        setStatus('resolved');
      })
      .catch(error => {
        setError(error);
        setStatus('rejected');
      });
  };

  useEffect(() => {
    setStatus('pending');
    getMovie(movieId, keySearch);
  }, [movieId, keySearch]);

  return { movieDetails, error, status };
};
