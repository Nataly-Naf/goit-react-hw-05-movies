import { GetTrandingMovies } from 'components/Api/Api';
import { TrandedMovieGallery } from 'components/TrandedMovieGallery/TrandedMovieGallery';
import { useEffect, useState } from 'react';
import { toast } from 'react-toastify';

export default function HomePage() {
  const [movies, setMovies] = useState([]);
  const [query, setQuery] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [page, setPage] = useState(1);

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
      } finally {
        setLoading(false);
      }
    }
    GetMovies();
  }, [query]);

  return (
    <div>
      <h1>Welcome!</h1>
      <TrandedMovieGallery onMovies={movies} />
      {/* <li>{ }</li> */}
    </div>
  );
}
