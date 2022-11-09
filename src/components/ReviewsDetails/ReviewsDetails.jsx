import { useKeyForSearch } from 'hooks/useKeyForSearch';
import { useParams } from 'react-router-dom';
import { ReviewItem } from './ReviewItem';
import { ReviewList, ReviewNotFound } from './ReviewsDetails.styled';

export const ReviewsDetails = () => {
  const { movieId } = useParams();

  const { movieDetails, error, status } = useKeyForSearch(movieId, '/reviews');

  if (status === 'rejected') {
    return <p>{error.message}</p>;
  }
  if (status === 'resolved') {
    const { results } = movieDetails;
    const noResults = results.length === 0;

    return noResults ? (
      <ReviewNotFound>We don't have any reviews for this movie</ReviewNotFound>
    ) : (
      <ReviewList>
        {results.map(({ id, author_details, content }) => {
          const { username } = author_details;
          return <ReviewItem key={id} username={username} desc={content} />;
        })}
      </ReviewList>
    );
  }
};
