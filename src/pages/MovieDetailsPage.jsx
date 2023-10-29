import { getMovieById } from 'components/Api/Api';
import { useEffect, useRef, useState } from 'react';
import { Link, Outlet, useLocation, useParams } from 'react-router-dom';
import { FaArrowAltCircleLeft } from 'react-icons/fa';
import {
  AddInfoWrapper,
  DescrSubtitle,
  DescrTitle,
  DescrWrapper,
  InfoSubtitle,
  MovieItemMainDescr,
} from 'components/MovieItem/MovieItem.styled';

export default function MovieDetailsPage() {
  const params = useParams();
  const movieId = params.movieId;
  const [movie, setMovie] = useState();
  const location = useLocation();
  const backLinkLocationRef = useRef(location?.state?.from ?? '/');

  useEffect(() => {
    async function getMovie() {
      try {
        const fetchedMovie = await getMovieById(movieId);
        setMovie(fetchedMovie);
      } catch (error) {}
    }
    getMovie();
  }, [movieId]);

  const defaultImg =
    'https://ireland.apollo.olxcdn.com/v1/files/0iq0gb9ppip8-UA/image;s=1000x700';
  return (
    movie && (
      <div>
        <Link to={backLinkLocationRef.current}>
          <FaArrowAltCircleLeft />
          Go back
        </Link>
        <DescrWrapper>
          <img
            src={
              movie.poster_path
                ? `https://image.tmdb.org/t/p/w500/${movie.poster_path}`
                : defaultImg
            }
            width={250}
            alt="poster"
          />
          <MovieItemMainDescr>
            <DescrTitle>{movie.original_title}</DescrTitle>
            <p>User score: {movie.vote_count}%</p>
            <DescrSubtitle>Overview</DescrSubtitle>
            <p>{movie.overview}</p>
            <DescrSubtitle>Genres</DescrSubtitle>

            <p>
              {movie.genres.map(genre => {
                return `${genre.name}  `;
              })}
              ,
            </p>
          </MovieItemMainDescr>
        </DescrWrapper>
        <AddInfoWrapper>
          <InfoSubtitle>Additional information</InfoSubtitle>
          <li>
            <Link to={'cast'}>Cast</Link>
          </li>
          <li>
            <Link to={'review'}>Review</Link>
          </li>
        </AddInfoWrapper>
        <Outlet />
      </div>
    )
  );
}
