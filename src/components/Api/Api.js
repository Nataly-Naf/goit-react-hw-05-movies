import axios from 'axios';

const baseUrl = 'https://api.themoviedb.org/3/';
const api_key = 'c702dee94cc9c5753a79ce15399cdb9c';

export const GetTrandingMovies = async () => {
  const response = await axios.get(
    `${baseUrl}trending/movie/day?language=en-US&api_key=${api_key}`
  );

  return response.data.results;
};

export const getMovieByName = async value => {
  const response = await axios.get(
    `${baseUrl}/search/movie?query=${value}&language=en-US&api_key=${api_key}`
  );
  return response.data.results;
};

export const getMovieById = async id => {
  const response = await axios.get(
    `https://api.themoviedb.org/3/movie/${id}?language=en-US&api_key=${api_key}`
  )
  return response.data;
}

export const getCastById = async id => {
  const response = await axios.get(
    `${baseUrl}movie/${id}/credits?language=en-US&api_key=${api_key}`
  )
  return response.data;
}

export const getReviewById = async id => {
  const response = await axios.get(
    `${baseUrl}movie/${id}/reviews?language=en-US&api_key=${api_key}`
  )
  return response.data;
}

