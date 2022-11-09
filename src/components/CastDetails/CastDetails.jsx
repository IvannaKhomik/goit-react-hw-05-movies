import { CastCard } from './CastCard';
import { useKeyForSearch } from 'hooks/useKeyForSearch';
import { useParams } from 'react-router-dom';
import { CastList, ErrorMessage } from './CastDetails.styled';

export const CastDetails = () => {
  const { movieId } = useParams();

  const { movieDetails, error, status } = useKeyForSearch(movieId, '/credits');

  if (status === 'rejected') {
    return <ErrorMessage>{error.message}</ErrorMessage>;
  }
  if (status === 'resolved') {
    const { cast } = movieDetails;

    return (
      <>
        <CastList>
          {cast.map(({ cast_id, character, profile_path, original_name }) => {
            return (
              <CastCard
                key={cast_id}
                character={character}
                image={profile_path}
                name={original_name}
              />
            );
          })}
        </CastList>
      </>
    );
  }
};
