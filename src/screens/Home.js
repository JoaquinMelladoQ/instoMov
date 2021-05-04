import React from 'react';
import { StyleSheet, View } from 'react-native';
import Header from '../components/Header';
import MoviesList from '../components/Movies/MoviesList';
import colors from '../lib/colors';
import movies from '../lib/movies';

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#34495e',
  },
})

const Home = () => {
  return (
    <>
      <View style={styles.container}>
        <Header title="La Cartelera"/>
        <MoviesList 
          colors={colors}
          movies={movies}
        />
      </View>
    </> 
  );
};

export default Home;
