import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import Chip from './Chip';
import colors from '../lib/colors.json'

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    paddingTop: '20%',
  },
})

const Filters = ({ 
  moviesGenres,
  onPress,
}) => {
  //console.log({ colors }, 'from filter component');

  const genresChip = moviesGenres.map((genre, index) => (
    <Chip 
      pressable
      onPress={onPress}
      key={`genres-${index}`} 
      value={genre} 
      colors={colors[genre]}
    />
  ))

  return (
    <View 
      style={styles.container}
    >
      {genresChip}
    </View>
  )
}

export default Filters
