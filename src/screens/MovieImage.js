import React from 'react';
import { StyleSheet, Image, View } from 'react-native';

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
    borderRadius: 15,
    backgroundColor: 'black'
  },
  image: {
    height: '100%',
    width: '100%',
  },
});

const MovieImage = ({ posterurl }) => {
  return (
    <>
      <View style={styles.container}>
        <Image
          style={styles.image}
          source={{ uri: posterurl }}
          resizeMode="contain"
        />
      </View>
    </>
  );
};

export default MovieImage;
