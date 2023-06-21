import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { getMovieCast } from 'services/api';
import { CastItem, CastInfo } from 'components/Cast.styled';

const Cast = () => {
  const [cast, setCast] = useState([]);
  const { movieId } = useParams();

  useEffect(() => {
    getMovieCast(movieId)
      .then(credits => setCast(credits.cast))
      .catch(error => {
        console.log(error.message);
        setCast([]);
      });
  }, [movieId]);

  const imageUrl = 'https://image.tmdb.org/t/p/w300';

  if (cast.length === 0) {
    return <p>We don't have any casts for this movie</p>;
  }

  return (
    <ul>
      {cast.map(actor => (
        <CastItem key={actor.id}>
          {actor.profile_path && (
            <img
              src={`${imageUrl}${actor.profile_path}`}
              alt={actor.name}
              width="120"
            />
          )}
          <CastInfo>
            <p>
              <b>Name:</b> {actor.name}
            </p>
            <p>
              <b>Character:</b> {actor.character}
            </p>
          </CastInfo>
        </CastItem>
      ))}
    </ul>
  );
};

export default Cast;
