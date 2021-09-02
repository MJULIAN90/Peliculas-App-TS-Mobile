import {useState} from 'react';
import {useEffect} from 'react';
import movieDB from '../api/movieDB';
import {MovieDBNowPlaying, Movie} from '../interfaces/movieInterface';

const UseMovies = () => {
  const [isloading, setisloading] = useState(true);
  const [peliculasEnCine, setPeliculasEnCine] = useState<Movie[]>([]);

  const getMovies = async () => {
    const resp = await movieDB.get<MovieDBNowPlaying>('/now_playing');
    const peliculas = resp.data.results;

    setPeliculasEnCine(peliculas);
    setTimeout(() => {
      setisloading(false);
    }, 1000);
  };

  useEffect(() => {
    //now_playing
    getMovies();
  }, []);

  return {
    peliculasEnCine,
    isloading,
  };
};

export default UseMovies;
