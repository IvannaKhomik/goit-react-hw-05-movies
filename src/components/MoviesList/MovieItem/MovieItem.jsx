import { MovieName, StyledLink } from './MovieItem.styled';

export const MovieItem = ({ movieId, title }) => {
  return (
    title && (
      <MovieName>
        <StyledLink to={`movies/${movieId}`}>{title}</StyledLink>
      </MovieName>
    )
  );
};
