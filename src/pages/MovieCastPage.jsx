import { getCastById } from 'components/Api/Api';
import { Cast } from 'components/Cast/Cast';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

export const MovieCast = () => {
  const params = useParams();
  const movieId = params.movieId;

  const [cast, setCast] = useState([]);

  useEffect(() => {
    async function getCast() {
      try {
        const fetchedMovie = await getCastById(movieId);
        console.log(fetchedMovie.cast);

        setCast(fetchedMovie.cast);
        console.log(cast);
      } catch (error) {}
    }
    getCast();
  }, [movieId, cast]);

  return <Cast onCast={cast} />;
};
