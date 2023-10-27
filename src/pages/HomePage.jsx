import { GetTrandingMovies } from 'components/Api/Api';
import { AudioItem } from 'components/Loader/Loader';
import { TrandedMovieGallery } from 'components/TrandedMovieGallery/TrandedMovieGallery';
import { useEffect, useState } from 'react';
import { toast } from 'react-toastify';

export default function HomePage() {
  const [movies, setMovies] = useState([]);
  const [query, setQuery] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    // if (query === '') {
    //   return;
    // }
    async function GetMovies() {
      try {
        setError(false);
        setLoading(true);
        const newTrandingMovies = await GetTrandingMovies();
        toast.success('We have found tranding movies');
        setMovies(prevState => [...prevState, ...newTrandingMovies]);
      } catch (error) {
        setError(true);
        console.log(error);
      } finally {
        setLoading(false);
      }
    }
    GetMovies();
  }, [query]);

  return (
    <div>
      <h1>Welcome!</h1>
      {loading && <AudioItem />}
      <TrandedMovieGallery onMovies={movies} />
    </div>
  );
}
