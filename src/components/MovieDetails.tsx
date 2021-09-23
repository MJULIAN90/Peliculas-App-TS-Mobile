import React from 'react';
import currencyFormatter from 'currency-formatter';
import {View, Text, FlatList} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import {Cast} from '../interfaces/creditsInterfaces';
import {MovieFull} from '../interfaces/movieInterface';
import ActorItem from './ActorItem';

interface Props {
  movieFull: MovieFull;
  cast: Cast[];
}

const MovieDetails = ({movieFull, cast}: Props) => {
  return (
    <>
      {/* detalles */}
      <View style={{marginHorizontal: 20}}>
        <View style={{flexDirection: 'row'}}>
          <Text>{movieFull.vote_average} </Text>
          <Icon name="star-outline" color="grey" size={16} />
          <Text>{movieFull.genres.map(gen => gen.name).join(', ')}</Text>
        </View>

        {/* historia */}

        <Text style={{fontSize: 22, marginTop: 10, fontWeight: 'bold'}}>
          Historia
        </Text>

        <Text style={{fontSize: 15}}>{movieFull.overview} </Text>

        {/* presupuesto */}

        <Text style={{fontSize: 22, marginTop: 10, fontWeight: 'bold'}}>
          Presupuesto
        </Text>

        <Text style={{fontSize: 18}}>
          {currencyFormatter.format(movieFull.budget, {code: 'USD'})}{' '}
        </Text>
      </View>

      {/* casting */}
      <View style={{marginTop: 10, marginBottom: 100}}>
        <Text
          style={{
            fontSize: 22,
            marginTop: 10,
            fontWeight: 'bold',
            marginHorizontal: 20,
          }}>
          Actores
        </Text>
        <FlatList
          data={cast}
          horizontal={true}
          showsVerticalScrollIndicator={false}
          keyExtractor={item => item.id.toString()}
          renderItem={({item}) => <ActorItem actor={item} />}
          style={{marginTop: 10, height: 70}}
        />
      </View>
    </>
  );
};

export default MovieDetails;
