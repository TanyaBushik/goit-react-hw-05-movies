import { useEffect, useState, useRef } from 'react';
import { Outlet, useParams, useLocation } from 'react-router-dom';
import { getMovieId } from 'services/api';
import { RiArrowLeftLine, RiArrowRightLine } from 'react-icons/ri';
import {
  BackButton,
  DetailsContainer,
  MovieInfo,
  AdditionalInfo,
  AdditionalList,
  SubMenuLink,
} from 'pages/MovieDetails.styled';

const MovieDetails = () => {
  const [movie, setMovie] = useState({});
  const { movieId } = useParams();
  const location = useLocation();
  const backLinkLocation = useRef(location.state?.from ?? '/');

  useEffect(() => {
    getMovieId(movieId)
      .then(response => setMovie(response))
      .catch(error => {
        console.log(error.message);
        setMovie({});
      });
  }, [movieId, setMovie]);

  function countUserScore() {
    const average = movie.vote_average;
    const userScore = Math.round(average * 10).toFixed(0) + '%';
    return userScore;
  }

  const { genres } = movie;
  const releaseDate = new Date(movie.release_date).getFullYear();
  const imageUrl = 'https://image.tmdb.org/t/p/w300';
  const posterPath = movie.poster_path;
  const productionCountries = movie.production_countries;

  return (
    <DetailsContainer>
      <BackButton to={backLinkLocation.current}>
        <RiArrowLeftLine />
        Go back
      </BackButton>
      <MovieInfo>
        {posterPath && (
          <img src={`${imageUrl}${posterPath}`} alt={movie.title} />
        )}
        <div>
          <h2>
            {movie.title} ({releaseDate ? releaseDate : movie.status})
          </h2>
          <p>
            Made in:{' '}
            {productionCountries &&
              productionCountries.map(country => country.name).join(', ')}
          </p>
          <p>User Score: {countUserScore()}</p>
          <h3>Overview</h3>
          <p>{movie.overview}</p>
          <h3>Genres</h3>
          <p>{genres && genres.map(genre => genre.name).join(' ')} </p>
        </div>
      </MovieInfo>
      <AdditionalInfo>
        <h3>Additional information</h3>
        <AdditionalList>
          <li>
            <SubMenuLink to="cast">
              <RiArrowRightLine />
              Cast
            </SubMenuLink>
          </li>
          <li>
            <SubMenuLink to="reviews">
              <RiArrowRightLine />
              Reviews
            </SubMenuLink>
          </li>
        </AdditionalList>
        <Outlet />
      </AdditionalInfo>
    </DetailsContainer>
  );
};

export default MovieDetails;
