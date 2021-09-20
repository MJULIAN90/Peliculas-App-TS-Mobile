import React from 'react';
import {ActivityIndicator, View, ScrollView} from 'react-native';
import Carousel from 'react-native-snap-carousel';
import UseMovies from '../hooks/UseMovies';
import MovieCard from '../components/MovieCard';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {useWindowDimensions} from 'react-native';
import HorizontalSlider from '../components/HorizontalSlider';

const HomeScreen = () => {
  const {nowPlaying, isloading, popular, topRated, upcoming} = UseMovies();

  const {width, height} = useWindowDimensions();

  const {top} = useSafeAreaInsets();

  if (isloading) {
    return (
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <ActivityIndicator color="red" size={100} />
      </View>
    );
  }

  return (
    <ScrollView>
      <View style={{marginTop: top + 20}}>
        <View style={{height: height * 0.45}}>
          <Carousel
            data={nowPlaying}
            renderItem={({item}: any) => <MovieCard movie={item} />}
            sliderWidth={width}
            itemWidth={300}
            inactiveSlideOpacity={0.9}
          />
        </View>

        <HorizontalSlider title="topRated" movies={topRated} />
        <HorizontalSlider title="upcoming" movies={upcoming} />
        <HorizontalSlider title="Populares" movies={popular} />
      </View>
    </ScrollView>
  );
};

export default HomeScreen;
