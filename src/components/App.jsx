import { Route, Routes, NavLink } from 'react-router-dom';
// import Home from 'path/to/pages/Home';
// import About from 'path/to/pages/About';
// import Products from 'path/to/pages/Products';
// import NotFound from 'path/to/pages/NotFound';
import styled from 'styled-components';
import HomePage from 'pages/HomePage';
import { MovieDetails } from 'pages/MovieDetailsPage';
import { Movies } from 'pages/MoviesPage';
import { NotFoundPage } from 'pages/NotFoundPage';
import { MovieCast } from 'pages/MovieCastPage';

const StyledLink = styled(NavLink)`
  color: black;

  &.active {
    color: orange;
  }
`;
export const App = () => {
  return (
    <div>
      <nav>
        <StyledLink to="/"> Home</StyledLink>
        <StyledLink to="/movies"> Movies</StyledLink>
      </nav>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/movies" element={<Movies />} />
        <Route path="/movies/:movieId" element={<MovieDetails />}>
          <Route path="cast" element={<MovieCast />} />
          <Route path="review" element={<div>B</div>} />
        </Route>
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </div>
  );
};
