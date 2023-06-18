import { useEffect, useState } from 'react';
import { getMoviesTrading } from 'services/api';
import MoviesList from '../components/MoviesList';

const Home = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    getMoviesTrading().then(response => {
      setMovies(response).catch(error => console.error(error.message));
    });
  }, []);
  return (
    <>
      <p> Trending movies</p>;
      {!!movies.length && <MoviesList movies={movies} />}
    </>
  );
};

export default Home;
