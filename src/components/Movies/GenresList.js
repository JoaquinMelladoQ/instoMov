import React from 'react';
import { StyleSheet, View, FlatList } from 'react-native';
import Chip from '../Chip';
//import colors from '../../lib/colors.json'

const styles = StyleSheet.create({
  container: {
    marginVertical: 10,
    //backgroundColor: 'red'
  },
})

const GenresList = ({ genres, colors }) => {
  //console.log({ genres });
  //console.log({ colors }, 'from GenresList comp');
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
            //style={{backgroundColor: colors}}
          />
        )}
      />
    </View>
  )
}

export default GenresList 
