import { getMovieById } from 'components/Api/Api';
import { useEffect, useState } from 'react';
import { Link, Outlet, useParams } from 'react-router-dom';
import { FaArrowAltCircleLeft } from 'react-icons/fa';

export const MovieDetails = () => {
  const params = useParams();
  const movieId = params.movieId;
  const [movie, setMovie] = useState();

  useEffect(() => {
    async function getMovie() {
      try {
        const fetchedMovie = await getMovieById(movieId);
        setMovie(fetchedMovie);
      } catch (error) {}
    }
    getMovie();
  }, [movieId]);
  // const defaultImg =
  //   'https://ireland.apollo.olxcdn.com/v1/files/0iq0gb9ppip8-UA/image;s=1000x700';
  return (
    movie && (
      <div>
        <Link to={'/movies'}>
          <FaArrowAltCircleLeft />
          Go back
        </Link>
        <img
          src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
          width={250}
          alt="poster"
        />
        <h2>{movie.original_title}</h2>
        <p>User score: {movie.popularity}</p>
        <p>Overview: {movie.overview}</p>
        <p>
          Genres:{' '}
          {movie.genres.map(genre => {
            return `${genre.name} `;
          })}
          ,
        </p>
        <ul>
          <li>
            <Link to={'cast'}>Cast</Link>
          </li>
          <li>
            <Link to={`/movies/${movie.id}/review`}>Review</Link>
          </li>
        </ul>
        <Outlet />
      </div>
    )
  );
};
