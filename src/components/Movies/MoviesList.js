import React, { Component } from 'react';
import { FlatList } from 'react-native';
import MovieCard from './MovieCard';

export default class MoviesList extends Component {
  render() {
    const { movies } = this.props
    return (
      <>
        <FlatList 
          data={movies}
          keyExtractor={({ poster }) => poster}
          showsVerticalScrollIndicator={false}
          renderItem={({ 
            item: { 
              posterurl,
            }
          }) => {
            return (
              <MovieCard 
                posterurl={posterurl}
              />
            )
          }}
        />
      </>
    );
  };
};

