import { useEffect, Link } from 'react';
import { Outlet, useParams } from 'react-router-dom';

const MovieDetails = () => {
  const { movieId } = useParams();

  useEffect(() => {
    //   const API_KEY='980a29a06d08483ff8c874fb49e62f08'
  }, []);

  return (
    <>
      <div>Go back home</div>
      <ul>
        <li>
          <Link to="cast">Cast</Link>
        </li>
        <li>
          <Link to="reviews">Reviews</Link>
        </li>
      </ul>
      <Outlet />
    </>
  );
};

export default MovieDetails;
