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


const Chip = ({ value, pressable, onPress }) => {
  return (
    <TouchableOpacity 
      disabled={!pressable}
      onPress={() => onPress(value)}
      style={styles.container}
    >
      <Text style={styles.text}>{value}</Text>
    </TouchableOpacity>
  )
}

export default Chip
