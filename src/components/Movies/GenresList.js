import React from 'react';
import { StyleSheet, View, FlatList } from 'react-native';
import Chip from '../Chip';

const styles = StyleSheet.create({
  container: {
    marginVertical: 10,
  },
});

const GenresList = ({ genres, colors }) => {
  return (
    <View>
      <FlatList 
        style={styles.container}
        data={genres}
        horizontal
        showsVerticalScrollIndicator={false}
        keyExtractor={genre => genre}
        renderItem={({ item: genreName }) => (
          <Chip 
            colors={colors[genreName]}
            genresValue={genreName} 
          />
        )}
      />
    </View>
  );
};

export default GenresList;
