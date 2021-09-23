import React from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';
import {Cast} from '../interfaces/creditsInterfaces';

interface Props {
  actor: Cast;
}

const ActorItem = ({actor}: Props) => {
  const uri = `https://image.tmdb.org/t/p/w500${actor.profile_path}`;

  return (
    <View style={styles.container}>
      {actor.profile_path && (
        <Image
          source={{uri}}
          style={{width: 50, height: 50, borderRadius: 10}}
        />
      )}
      <View style={styles.infoActor}>
        <Text style={{fontSize: 18, fontWeight: 'bold'}}>{actor.name} </Text>
        <Text style={{fontSize: 16, opacity: 0.7}}>{actor.character} </Text>
      </View>
    </View>
  );
};

export default ActorItem;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    borderRadius: 10,
    height: 55,
    backgroundColor: 'white',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 11,
    },
    shadowOpacity: 0.5,
    shadowRadius: 10,
    elevation: 7,
    marginLeft: 20,
    paddingRight: 15,
  },

  infoActor: {
    marginLeft: 10,
    marginTop: 3,
  },
});
