import { MovieItem } from 'components/MovieItem/MovieItem';
import { Link } from 'react-router-dom';

export const MovieList = ({ onMovies }) => {
  return (
    <ul>
      {onMovies.map(movie => {
        return (
          <Link to={`/movies/${movie.id}`}>
            <MovieItem onMovieItem={movie} />
          </Link>
        );
      })}
    </ul>
  );
};
