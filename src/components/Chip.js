import React from 'react';
import { StyleSheet, TouchableOpacity, Text } from 'react-native';

const styles = StyleSheet.create({
  container: {
    padding: 5,
    paddingHorizontal: 10,
    backgroundColor: 'gray',
    margin: 5,
    borderRadius: 20,
  },
  text: {
    color: '#bdc3c7',
    fontWeight: 'bold',
  },
})


const Chip = ({ value, genresValue, pressable, onPress, colors = 'gray' }) => {
  
  //console.log({ colors }, 'from Chip component');
  //console.log({ value }, 'from Chip component');
  console.log({ genresValue }, 'Chip component, genresValue comes from GenresList comp');

  return (
    <TouchableOpacity 
      value={value}
      colors={colors}
      genresValue={genresValue}
      disabled={!pressable}
      onPress={() => onPress(value, genresValue)}
      style={[styles.container, { backgroundColor: colors }]}
    >
      <Text style={styles.text}>{value}{genresValue}</Text>
    </TouchableOpacity>
  )
}

export default Chip
