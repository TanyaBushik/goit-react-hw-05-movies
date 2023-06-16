import { useEffect, useState } from 'react';
import { getMoviesTrading } from 'services/api';

const Home = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    getMoviesTrading().then(response => {
      setMovies(response).catch(error => console.error(error.message));
    });
  }, []);
  return <div>Trending movies</div>;
};

export default Home;
