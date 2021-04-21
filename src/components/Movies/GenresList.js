import React from 'react';
import { StyleSheet, View, FlatList } from 'react-native';
import Chip from '../Chip';

const styles = StyleSheet.create({
  container: {
    marginVertical: 10,
  },
})

const GenresList = ({ genres }) => {
  //console.log({ genres });
  return (
    <View>
      <FlatList 
        data={genres}
        style={styles.container}
        horizontal
        showsVerticalScrollIndicator={false}
        keyExtractor={genre => genre}
        renderItem={({ item: genreName }) => (
          <Chip value={genreName} />
        )}
      />
    </View>
  )
}

export default GenresList 
