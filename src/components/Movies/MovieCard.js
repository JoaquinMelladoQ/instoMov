import React, { Component } from 'react';
import { View, Image, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    borderRadius: 15,
    backgroundColor: '#ecf0f1',
    marginBottom: 20,
  },
  image: {
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
    height: 300,
    width: '100%',
    backgroundColor: '#34495e',
  },
})

export default class MovieCard extends Component {
  render() {
    const { posterurl } = this.props
    return (
      <View style={styles.container}>
        <Image 
          style={styles.image}
          source={{ uri: posterurl }}
        />
      </View>
    );
  };
};

