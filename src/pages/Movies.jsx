import { useEffect, useState } from 'react';
import { DebounceInput } from 'react-debounce-input';
import { getMovieSearch } from 'services/api';
import { useSearchParams } from 'react-router-dom';
import { MoviesContainer, Icon } from 'pages/Movies.styled';
import MoviesList from 'components/MoviesList';

const Movies = () => {
  const [movies, setMovies] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get('query') ?? '';

  useEffect(() => {
    if (query === '') {
      setMovies([]);
      return;
    }
    getMovieSearch(query)
      .then(response => {
        setMovies(response);
      })
      .catch(error => {
        console.error(error.message);
        setMovies([]);
      });
  }, [query]);

  const handleInputChange = event => {
    const movieQueryValue = event.target.value;
    if (movieQueryValue === '') {
      return setSearchParams({});
    }
    setSearchParams({ query: movieQueryValue });
  };

  return (
    <MoviesContainer>
      <Icon />
      <DebounceInput
        minLength={2}
        debounceTimeout={300}
        type="text"
        value={query}
        placeholder="Enter movie's title..."
        onChange={handleInputChange}
      />
      {query && <h1>Found movies</h1>}
      {!!movies.length && <MoviesList movies={movies} />}
    </MoviesContainer>
  );
};

export default Movies;
