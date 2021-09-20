import React from 'react';
import {View, Text, FlatList, useWindowDimensions} from 'react-native';
import {Movie} from '../interfaces/movieInterface';
import MovieCard from './MovieCard';

interface Props {
  title?: String;
  movies: Movie[];
}

const HorizontalSlider = ({title, movies}: Props) => {
  const {width, height} = useWindowDimensions();
  return (
    <View
      style={{
        height: title ? height * 0.3 : height * 0.26,
      }}>
      {title && (
        <Text style={{fontSize: 25, fontWeight: 'bold', marginLeft: 10}}>
          {title}
        </Text>
      )}

      <FlatList
        data={movies}
        renderItem={({item}: any) => (
          <MovieCard movie={item} width={140} height={height * 0.22} />
        )}
        keyExtractor={item => item.id.toString()}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
      />
    </View>
  );
};

export default HorizontalSlider;
