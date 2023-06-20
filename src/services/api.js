import axios from 'axios';

// const BASE_URL = 'https://api.themoviedb.org/3/';

const API_KEY = '980a29a06d08483ff8c874fb49e62f08';
axios.defaults.baseURL = 'https://api.themoviedb.org/3/';

export const getMoviesTrading = async () => {
  const params = {
    api_key: API_KEY,
    page: 1,
  };
  const { data } = await axios.get('trending/movie/day', { params });
  return data.results;
};

export const getMovieSearch = async query => {
  const params = {
    api_key: API_KEY,
    page: 1,
    query,
  };
  const { data } = await axios.get('/search/movie', { params });
  return data.results.filter(movie =>
    movie.title.toLowerCase().includes(query.toLowerCase())
  );
};

export const getMovieId = async movieId => {
  const params = {
    api_key: API_KEY,
    page: 1,
  };
  const { data } = await axios.get(`/movie/${movieId}`, { params });
  console.log(data);
  return data;
};

export const getMovieCast = async movieId => {
  const params = {
    api_key: API_KEY,
    page: 1,
    language: 'en-US',
  };
  const { data } = await axios.get(`/movie/${movieId}/credits`, { params });
  return data;
};

export const getMovieReviews = async movieId => {
  const params = {
    api_key: API_KEY,
    page: 1,
    language: 'en-US',
  };
  const { data } = await axios.get(`/movie/${movieId}/reviews`, { params });
  return data.results;
};

// export const getMoviesTrading = async () => {
//   const response = await fetch(
//     `${BASE_URL}trending/movie/day?api_key=${API_KEY}&language=en-US`
//   ).then(data => data.json());
//   return response;
// };

// export const getMovieSearch = async (query, page) => {
//   const response = await fetch(
//     `${BASE_URL}search/movie?api_key=${API_KEY}&query=${query}&include_adult=false&page=${page}&language=en-US`
//   ).then(data => data.json());
//   return response;
// };

// export const getMovieId = async id => {
//   const response = await fetch(
//     `${BASE_URL}movie/${id}?api_key=${API_KEY}&language=en-US`
//   ).then(data => data.json());
//   return response;
// };

// export const getMovieCast = async id => {
//   const response = await fetch(
//     `${BASE_URL}movie/${id}/credits?api_key=${API_KEY}&language=en-US`
//   ).then(data => data.json());
//   return response;
// };

// export const getMovieReviews = async id => {
//   const response = await fetch(
//     `${BASE_URL}movie/${id}/reviews?api_key=${API_KEY}&language=en-US&page=1`
//   ).then(data => data.json());
//   return response;
// };
