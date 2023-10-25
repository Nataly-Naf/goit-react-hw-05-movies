import { getMovieById } from 'components/Api/Api';
import { MovieList } from 'components/MovieList/MovieList';
import { Searchbar } from 'components/SearchBar/SearchBar';
import { useEffect, useState } from 'react';
import { toast } from 'react-toastify';

console.log(getMovieById('batman'));

export const Movies = () => {
  const [query, setQuery] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [movies, setMovies] = useState([]);

  const onSubmitForm = value => {
    setQuery(value);
  };

  useEffect(() => {
    if (query === '') {
      return;
    }
    async function getMovie() {
      try {
        setMovies([]);
        setError(false);
        setLoading(true);
        const newMovies = await getMovieById(query);
        console.log(newMovies);
        toast.success('We have found pictures');
        setMovies(prevState => [...prevState, ...newMovies]);
      } catch (error) {
        setError(true);
      } finally {
        setLoading(false);
      }
    }
    getMovie();
  }, [query]);

  return (
    <div>
      <Searchbar onSubmitForm={onSubmitForm} />
      <MovieList onMovies={movies} />
    </div>
  );
};
