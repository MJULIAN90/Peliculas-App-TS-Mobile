import React from 'react';
import {ActivityIndicator, View, Text} from 'react-native';
import UseMovies from '../hooks/UseMovies';

const HomeScreen = () => {
  const {peliculasEnCine, isloading} = UseMovies();

  if (isloading) {
    return (
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <ActivityIndicator color="red" size={100} />
      </View>
    );
  }

  return (
    <View>
      <Text>Home</Text>
    </View>
  );
};

export default HomeScreen;
