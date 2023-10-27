import { MovieItem } from 'components/MovieItem/MovieItem';
import { Link, useSearchParams } from 'react-router-dom';

export const MovieList = ({ onMovies }) => {
     const [params, setParams] = useSearchParams();
 
  console.log(params)
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
