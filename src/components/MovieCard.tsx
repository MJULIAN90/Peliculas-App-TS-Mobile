import {useNavigation} from '@react-navigation/core';
import React from 'react';
import {Image, StyleSheet} from 'react-native';
import {View} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {Movie} from '../interfaces/movieInterface';

interface Props {
  movie: Movie;
  height?: number;
  width?: number;
}

const MovieCard = ({movie, height = 380, width = 280}: Props) => {
  const {poster_path} = movie;

  const uriImage = `https://image.tmdb.org/t/p/w500/${poster_path}`;

  const navigation = useNavigation();
  return (
    <TouchableOpacity
      onPress={() => navigation.navigate('DetailsScreen', movie)}
      activeOpacity={0.8}
      style={{
        width,
        height,
        marginHorizontal: 2,
        paddingBottom: 20,
        paddingHorizontal: 7,
      }}>
      <View style={styles.cardContainer}>
        <Image source={{uri: uriImage}} style={styles.image} />
      </View>
    </TouchableOpacity>
  );
};

export default MovieCard;

const styles = StyleSheet.create({
  image: {
    flex: 1,
    borderRadius: 20,
  },
  cardContainer: {
    flex: 1,
    borderRadius: 18,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 11,
    },
    shadowOpacity: 0.5,
    shadowRadius: 10,
    elevation: 7,
  },
});
