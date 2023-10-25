import axios from 'axios';

// const URL = 'https://api.themoviedb.org/3/authentication';

// const options = {
//   method: 'GET',
//   headers: {
//     accept: 'application/json',
//     api_key:'c702dee94cc9c5753a79ce15399cdb9c',
//   },
// };

const baseUrl = 'https://api.themoviedb.org/3/'
const api_key = 'c702dee94cc9c5753a79ce15399cdb9c'

export const GetTrandingMovies = async () => {
  const response = await axios.get(`${baseUrl}trending/movie/day?language=en-US&api_key=${api_key}`  );

  return response.data.results;
};

export const getMovieById = async (value) => {
  const response = await axios.get(`${baseUrl}/search/movie?query=${value}&language=en-US&api_key=${api_key}`)
  return response.data.results
}

// fetch('https://api.themoviedb.org/3/configuration', options)
//   .then(response => response.json())
//   .then(response => console.log(response))
//   .catch(err => console.error(err));
