import {useState} from 'react';
import {useEffect} from 'react';
import movieDB from '../api/movieDB';
import {MovieDBMoviesResponse, Movie} from '../interfaces/movieInterface';

interface MoviesState {
  nowPlaying: Movie[];
  popular: Movie[];
  topRated: Movie[];
  upcoming: Movie[];
}

const UseMovies = () => {
  const [isloading, setisloading] = useState(true);
  const [moviesState, setmoviesState] = useState<MoviesState>({
    nowPlaying: [],
    popular: [],
    topRated: [],
    upcoming: [],
  });

  const getMovies = async () => {
    let nowPlayingPromisse = movieDB.get<MovieDBMoviesResponse>('/now_playing');
    let popularPromisse = movieDB.get<MovieDBMoviesResponse>('/popular');
    let topRatedPromisse = movieDB.get<MovieDBMoviesResponse>('/top_rated');
    let upcomingromisse = movieDB.get<MovieDBMoviesResponse>('/upcoming');

    const response = await Promise.all([
      nowPlayingPromisse,
      popularPromisse,
      topRatedPromisse,
      upcomingromisse,
    ]);

    setmoviesState({
      nowPlaying: response[0].data.results,
      popular: response[1].data.results,
      topRated: response[2].data.results,
      upcoming: response[3].data.results,
    });

    setTimeout(() => {
      setisloading(false);
    }, 1000);
  };

  useEffect(() => {
    //now_playing
    getMovies();
  }, []);

  return {
    ...moviesState,
    isloading,
  };
};

export default UseMovies;
