import React from 'react';
import { StyleSheet, View, FlatList } from 'react-native';
import Chip from '../Chip';
import colors from '../../lib/colors.json'

const styles = StyleSheet.create({
  container: {
    marginVertical: 10,
  },
})

const GenresList = ({ genres }) => {
  //console.log({ genres });
  //console.log({ colors }, 'from GenresList comp');
  return (
    <View>
      <FlatList 
        data={genres}
        style={styles.container}
        horizontal
        showsVerticalScrollIndicator={false}
        keyExtractor={genre => genre}
        renderItem={({ item: genreName }) => (
          <Chip 
            colors={colors}
            genresValue={genreName} 
          />
        )}
      />
    </View>
  )
}

export default GenresList 
