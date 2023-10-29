import { getMovieByName } from 'components/Api/Api';
import { MovieList } from 'components/MovieList/MovieList';
import { Searchbar } from 'components/SearchBar/SearchBar';
import { useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import ClipLoader from 'react-spinners/ClipLoader';
import { useSearchParams } from 'react-router-dom';

export default function MoviesPage() {
  const [query, setQuery] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [movies, setMovies] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();

  console.log(error, setQuery);
  const onSubmitForm = value => {
    const nextParams = value !== '' ? { query: value } : {};
    setSearchParams(nextParams);
  };
  const queryFromUrl = searchParams.get('query') ?? '';

  useEffect(() => {
    if (queryFromUrl === '') {
      return;
    }
    async function getMovie() {
      try {
        setMovies([]);
        setError(false);
        setLoading(true);
        const newMovies = await getMovieByName(queryFromUrl);
        toast.success('We have found pictures');
        setMovies(prevState => [...prevState, ...newMovies]);
      } catch (error) {
        setError(true);
      } finally {
        setLoading(false);
      }
    }
    getMovie();
  }, [queryFromUrl, query]);
  return (
    <div>
      <Searchbar onSubmitForm={onSubmitForm} />
      {loading && ClipLoader}
      <MovieList onMovies={movies} />
    </div>
  );
}
