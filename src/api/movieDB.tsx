import axios from 'axios';

const movieDB = axios.create({
  baseURL: 'https://api.themoviedb.org/3/movie',
  params: {
    api_key: '8579d31f5abce25ec086f5e31d32b3fe',
    language: 'es-ES',
  },
});

export default movieDB;
