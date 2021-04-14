import React, { PureComponent } from 'react';
import { FlatList, View, StyleSheet } from 'react-native';
import MovieCard from './MovieCard';
import FilterButton from '../FilterButton';

const styles = StyleSheet.create({
  list: {
    margin: 10,
  },
  filterButton: {
    position: 'absolute',
  },
})

export default class MoviesList extends PureComponent {
  render() {
    const { movies } = this.props
    return (
      <>
        <FlatList
          style={styles.list}
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
        <View style={styles.filterButton}>
          <FilterButton />
        </View>
      </>
    );
  };
};

