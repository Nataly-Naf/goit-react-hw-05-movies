import { getCastById } from 'components/Api/Api';
import { AudioItem } from 'components/Loader/Loader';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

export const MovieCast = () => {
  const params = useParams();
  const movieId = params.movieId;

  const [cast, setCast] = useState([]);
  const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);
    console.log(error)

  useEffect(() => {
    async function getCast() {
      try {
        setError(false);
        setLoading(true);
        const fetchedMovie = await getCastById(movieId);
        setCast(fetchedMovie.cast);
      } catch (error) {
        setError(true);
        }
      finally {
        setLoading(false);
      }
    }
    getCast();
  }, [movieId, cast]);

  return (
    <div>
      {loading && <AudioItem />}
      <Cast onCast={cast} />;
    </div>
  );
};

const Cast = ({ onCast }) => {
  const defaultImg =
    'https://ireland.apollo.olxcdn.com/v1/files/0iq0gb9ppip8-UA/image;s=1000x700';
  return (
    <ul>
      {onCast.map(item => {
        return (
          <li key={item.item_id}>
            <img
              src={
                item.profile_path
                  ? `https://image.tmdb.org/t/p/w500/${item.profile_path}`
                  : defaultImg
              }
              width={70}
              alt={item.character}
            />
            <p>Caracter: {item.character}</p>
            <p>{item.name}</p>
          </li>
        );
      })}
    </ul>
  );
};
