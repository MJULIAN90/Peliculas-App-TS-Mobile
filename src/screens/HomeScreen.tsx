import React, {useContext, useEffect} from 'react';
import {ActivityIndicator, View, ScrollView} from 'react-native';
import Carousel from 'react-native-snap-carousel';
import UseMovies from '../hooks/UseMovies';
import MovieCard from '../components/MovieCard';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {useWindowDimensions} from 'react-native';
import HorizontalSlider from '../components/HorizontalSlider';
import {GradientBackgrount} from '../components/GradientBackgrount';
import {GetPosterColors} from '../helpers/HelperColores';
import {GradientContext} from '../context/GradientContext';

const HomeScreen = () => {
  const {nowPlaying, isloading, popular, topRated, upcoming} = UseMovies();

  const {setMainColors} = useContext(GradientContext);
  const {width, height} = useWindowDimensions();

  const {top} = useSafeAreaInsets();

  const getPosterColors = async (index: number) => {
    const movie = nowPlaying[index];

    const uri = `https://image.tmdb.org/t/p/w500/${movie.poster_path}`;

    const [primary = 'green', secondary = 'orange'] = await GetPosterColors(
      uri,
    );

    setMainColors({primary, secondary});
  };

  useEffect(() => {
    if (nowPlaying.length > 0) {
      getPosterColors(0);
    }
  }, [nowPlaying]);

  if (isloading) {
    return (
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <ActivityIndicator color="red" size={100} />
      </View>
    );
  }

  return (
    <GradientBackgrount>
      <ScrollView>
        <View style={{marginTop: top + 20}}>
          <View style={{height: height * 0.45, marginBottom: 18}}>
            <Carousel
              data={nowPlaying}
              renderItem={({item}: any) => <MovieCard movie={item} />}
              sliderWidth={width}
              itemWidth={300}
              inactiveSlideOpacity={0.9}
              onSnapToItem={index => getPosterColors(index)}
            />
          </View>

          <HorizontalSlider title="TOP RANKING" movies={topRated} />
          <HorizontalSlider title="PROXIMAMENTE" movies={upcoming} />
          <HorizontalSlider title="POPULARES" movies={popular} />
        </View>
      </ScrollView>
    </GradientBackgrount>
  );
};

export default HomeScreen;
