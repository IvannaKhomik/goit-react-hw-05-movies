import { Outlet, useLocation, useParams } from 'react-router-dom';
import {
  AddInfo,
  BackLink,
  BackSpan,
  InfoLink,
  Error,
  MovieCard,
  MovieDesc,
  MovieImg,
  MovieSubtitle,
  MovieTitle,
} from './MovieDetails.styled';
import { HiOutlineArrowNarrowLeft } from 'react-icons/hi';
import { useKeyForSearch } from 'hooks/useKeyForSearch';
import defaultImg from '../../img/NoFound.jpg';

export const MovieDetails = () => {
  const { movieId } = useParams();
  const location = useLocation();

  const { movieDetails, error, status } = useKeyForSearch(movieId);

  if (status === 'rejected') {
    return <Error>{error.message}</Error>;
  }

  if (status === 'resolved') {
    const {
      title,
      poster_path,
      genres,
      vote_average,
      overview,
      original_title,
    } = movieDetails;
    const genreName = genres.map(genre => genre.name).join(', ');
    const fullPath = 'https://image.tmdb.org/t/p/w500/' + poster_path;
    const userScore = Math.round(vote_average * 10);
    const backLinkHref = location.state?.from ?? '/';

    return (
      <main>
        <BackLink to={backLinkHref}>
          <HiOutlineArrowNarrowLeft />
          <BackSpan>Go Back</BackSpan>
        </BackLink>
        <MovieCard>
          <MovieImg
            src={poster_path ? fullPath : defaultImg}
            alt={original_title}
          />
          <div>
            <MovieTitle>{title}</MovieTitle>
            <MovieDesc>User Score: {userScore} &#x25;</MovieDesc>
            <MovieSubtitle>Overview</MovieSubtitle>
            <MovieDesc>{overview}</MovieDesc>
            <MovieSubtitle>Genres</MovieSubtitle>
            <MovieDesc>{genreName}</MovieDesc>
          </div>
        </MovieCard>
        <AddInfo>
          <MovieSubtitle>Additional information</MovieSubtitle>
          <InfoLink to="cast">Cast</InfoLink>
          <InfoLink to="reviews">Reviews</InfoLink>
        </AddInfo>
        <Outlet />
      </main>
    );
  }
};
