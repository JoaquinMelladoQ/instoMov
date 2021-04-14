import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

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


const Chip = ({ actorName }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{actorName}</Text>
    </View>
  )
}

export default Chip
