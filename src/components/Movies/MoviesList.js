import React, { PureComponent } from 'react';
import { FlatList } from 'react-native';
import MovieCard from './MovieCard';

export default class MoviesList extends PureComponent {
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
              year,
              title,
              imdbRating,
              actors,
            }
          }) => {
            return (
              <MovieCard 
                posterurl={posterurl}
                year={year}
                title={title}
                imdbRating={imdbRating}
                actors={actors}
              />
            )
          }}
        />
      </>
    );
  };
};

