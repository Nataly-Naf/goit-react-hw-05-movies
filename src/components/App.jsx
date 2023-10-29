import { Route, Routes, NavLink } from 'react-router-dom';
// import Home from 'path/to/pages/Home';
// import About from 'path/to/pages/About';
// import Products from 'path/to/pages/Products';
// import NotFound from 'path/to/pages/NotFound';
import styled from 'styled-components';
import { MovieCast } from './Cast/Cast';
import { MovieReviews } from './Reviews/Reviews';
import { Suspense, lazy } from 'react';

const StyledLink = styled(NavLink)`
  color: black;

  &.active {
    color: orange;
  }
`;
// const MovieDetails = lazy(() => import('pages/MovieDetailsPage'));
const HomePage = lazy(() => import('pages/HomePage'));
const MovieDetailsPage = lazy(() => import('pages/MovieDetailsPage'));
const MoviesPage = lazy(() => import('pages/MoviesPage'));
const NotFoundPage = lazy(() => import('pages/NotFoundPage'));

export const App = () => {
  return (
    <div>
      <nav>
        <StyledLink to="/"> Home</StyledLink>
        <StyledLink to="/movies"> Movies</StyledLink>
      </nav>
      <Suspense fallback={'Loading page'}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/movies" element={<MoviesPage />} />
          <Route path="/movies/:movieId" element={<MovieDetailsPage />}>
            <Route path="cast" element={<MovieCast />} />
            <Route path="review" element={<MovieReviews />} />
          </Route>
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </Suspense>
    </div>
  );
};
