import { useParams } from 'react-router-dom';
import { useEffect } from 'react';

const Reviews = () => {
  const { movieId } = useParams();

  useEffect(() => {
    // const API_KEY = '980a29a06d08483ff8c874fb49e62f08';
  }, []);

  return <div>Reviews: {movieId}</div>;
};

export default Reviews;
