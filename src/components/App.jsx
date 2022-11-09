import { SharedLayout } from 'components/SharedLayout';
import { Route, Routes } from 'react-router-dom';
import { Container } from './App.styled';
import { ThemeProvider } from 'styled-components';
import { NotFound } from './NotFound';
import { lazy } from 'react';

const theme = {
  grey: '#546e7a',
  yellow: '#ffeb3b',
  darkGrey: '#263238',
  errorColor: '#F44336',
};

const Home = lazy(() => import('../pages/Home'));
const Movies = lazy(() => import('../pages/Movies'));
const MovieDetails = lazy(() => import('../pages/MovieDetails'));
const CastDetails = lazy(() => import('./CastDetails'));
const ReviewsDetails = lazy(() => import('./ReviewsDetails'));

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
          </Route>
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Container>
    </ThemeProvider>
  );
};
