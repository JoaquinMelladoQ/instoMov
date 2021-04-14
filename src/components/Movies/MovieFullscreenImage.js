import React from 'react';
import { StyleSheet, Image, TouchableHighlight } from 'react-native';

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    width: '100%',
    height: '100%',
    zIndex: 10,
    borderRadius: 15,
    backgroundColor: 'black'
  },
  image: {
    width: '100%',
    height: '100%',
  },
})

const MovieFullscreenImage = ({
  source,
  onPress,
}) => {
  return (
    <TouchableHighlight 
      style={styles.container}
      underlayColor="black"
      onPress={onPress}
    >
      <Image 
        style={styles.image}
        source={source}
        resizeMode="contain"
      />
    </TouchableHighlight>
  )
}

export default MovieFullscreenImage

