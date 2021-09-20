import {useEffect, useState} from 'react';
import movieDB from '../api/movieDB';
import {MovieFull} from '../interfaces/movieInterface';

interface MovieDetails {
  cast: any[];
  isLoading: boolean;
  movieFull: MovieFull;
}

const UseMovieDetails = (movieId: number) => {
  const [state, setstate] = useState<MovieDetails>();

  const getMovieDetails = async () => {
    const response = await movieDB.get<MovieFull>(`/${movieId}`);
  };

  useEffect(() => {
    getMovieDetails();
  }, []);

  return {
    state,
  };
};

export default UseMovieDetails;
