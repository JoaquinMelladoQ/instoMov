import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import Chip from './Chip';

const styles = StyleSheet.create({
  container: {},
})

const Filters = ({ 
  moviesGenres,
  onPress,
}) => {

  const genresChip = moviesGenres.map((genre, index) => (
    <Chip key={`genres-${index}`} value={genre} />
  ))

  return (
    <View style={styles.container}>
      {genresChip}
    </View>
  )
}

export default Filters
