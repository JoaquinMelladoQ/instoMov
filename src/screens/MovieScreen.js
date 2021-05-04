import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

const styles = StyleSheet.create({
  container: {},
});

const MovieScreen = ({ 
  movies,
}) => {

  //console.log({ movies });

  return (
    <View style={styles.container}>
      <Text>MovieScreen</Text>
    </View>
  )
}

export default MovieScreen;
