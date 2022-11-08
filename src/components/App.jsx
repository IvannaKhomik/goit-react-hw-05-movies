import { SharedLayout } from 'components/SharedLayout';
import { Home } from 'pages/Home';
import { Movies } from 'pages/Movies';
import { Route, Routes } from 'react-router-dom';
import { Container } from './App.styled';
import { MovieDetails } from '../pages/MovieDetails';
import { ThemeProvider } from 'styled-components';
import { CastDetails } from './CastDetails';
import { ReviewsDetails } from './ReviewsDetails';

const theme = {
  grey: '#546e7a',
  yellow: '#ffeb3b',
  darkGrey: '#263238',
  errorColor: '#F44336',
};

export const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <Container>
        <Routes>
          <Route path="/" element={<SharedLayout />}>
            <Route index element={<Home />}></Route>
            <Route path="movies" element={<Movies />}></Route>
            <Route path="movies/:movieId" element={<MovieDetails />}>
              <Route path="cast" element={<CastDetails />}></Route>
              <Route path="reviews" element={<ReviewsDetails />}></Route>
            </Route>
            {/* <Route path="*" element={<NotFound />} /> */}
          </Route>
        </Routes>
      </Container>
    </ThemeProvider>
  );
};
