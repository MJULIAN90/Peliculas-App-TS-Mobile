import {StackScreenProps} from '@react-navigation/stack';
import React from 'react';
import {
  View,
  Image,
  StyleSheet,
  Text,
  ScrollView,
  Dimensions,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import UseMovieDetails from '../hooks/UseMovieDetails';
import {RootStackParams} from '../navigation/Navigation';

const screenHeight = Dimensions.get('screen').height;

interface Props extends StackScreenProps<RootStackParams, 'DetailsScreen'> {}

const DetailsScreen = ({route}: Props) => {
  const movie = route.params;
  const uriImage = `https://image.tmdb.org/t/p/w500${movie.poster_path}`;

  UseMovieDetails(movie.id);

  return (
    <ScrollView>
      <View style={styles.imageContainer}>
        <Image source={{uri: uriImage}} style={styles.posterImage} />
      </View>
      <View style={styles.marginContainer}>
        <Text style={styles.sutTitle}>{movie.original_title}</Text>
        <Text style={styles.title}>{movie.title}</Text>
      </View>
      <View style={styles.marginContainer}>
        <Icon name="star-outline" color="grey" size={20} />
      </View>
    </ScrollView>
  );
};

export default DetailsScreen;

const styles = StyleSheet.create({
  imageContainer: {
    width: '100%',
    height: screenHeight * 0.7,
    overflow: 'hidden',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 11,
    },
    shadowOpacity: 0.5,
    shadowRadius: 10,
    elevation: 7,
    borderBottomEndRadius: 25,
    borderBottomStartRadius: 25,
  },
  marginContainer: {
    marginHorizontal: 20,
    marginTop: 20,
  },
  posterImage: {
    flex: 1,
  },
  sutTitle: {fontSize: 18, opacity: 0.8},
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
});
