import { FilteredMoviesList } from 'components/FilteredMoviesList';
import { Suspense } from 'react';
import { SearchBar } from 'components/SearchBar';
import { useEffect } from 'react';
import { useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import { Loader } from 'components/Loader';

const Movies = () => {
  const [query, setQuery] = useState('');
  const [searchParams, setSearchParams] = useSearchParams();
  const movieName = searchParams.get('query');

  useEffect(() => {
    if (!movieName) {
      return;
    }
    setQuery(movieName);
  }, [setQuery, movieName]);

  return (
    <main>
      <SearchBar setSearchParams={setSearchParams} />
      <Suspense fallback={<Loader />}>
        {movieName && <FilteredMoviesList query={query} />}
      </Suspense>
      <Toaster />
    </main>
  );
};

export default Movies;
