import { useEffect, useState } from 'react';
import { getMoviesTrading } from 'services/api';
import MoviesList from '../components/MoviesList';
import { HomeContainer, HomeTitle } from 'pages/Home.styled';

const Home = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    getMoviesTrading()
      .then(response => {
        setMovies(response);
      })
      .catch(error => console.error(error.message));
  }, []);

  return (
    <HomeContainer>
      <HomeTitle> Trending movies</HomeTitle>
      {!!movies.length && <MoviesList movies={movies} />}
    </HomeContainer>
  );
};

export default Home;
