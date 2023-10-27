import { Link, useLocation} from 'react-router-dom';
import { MovieItem } from 'components/MovieItem/MovieItem';

export const MovieList = ({ onMovies }) => {
  const location = useLocation()
  console.log(location)
  return (
    <ul>
      {onMovies.map(movie => {
        return (
          <Link to={`/movies/${movie.id}`} state={{from:location}}>
            <MovieItem onMovieItem={movie} />
          </Link>
        );
      })}
    </ul>
  );
};

