import {useEffect, useState} from 'react';
import movieDB from '../api/movieDB';
import {MovieFull} from '../interfaces/movieInterface';
import {Cast, CreditResponse} from '../interfaces/creditsInterfaces';

interface MovieDetails {
  cast: Cast[];
  isLoading: boolean;
  movieFull?: MovieFull;
}

const UseMovieDetails = (movieId: number) => {
  const [state, setstate] = useState<MovieDetails>({
    isLoading: true,
    movieFull: undefined,
    cast: [],
  });

  const getMovieDetails = async () => {
    const movieDetailsPromise = await movieDB.get<MovieFull>(`/${movieId}`);
    const castPromise = await movieDB.get<CreditResponse>(
      `/${movieId}/credits`,
    );

    const [movieDetailsResponse, castPormiseResponse] = await Promise.all([
      movieDetailsPromise,
      castPromise,
    ]);

    setstate({
      isLoading: false,
      movieFull: movieDetailsResponse.data,
      cast: castPormiseResponse.data.cast,
    });
  };

  useEffect(() => {
    getMovieDetails();
  }, []);

  return {
    ...state,
  };
};

export default UseMovieDetails;
