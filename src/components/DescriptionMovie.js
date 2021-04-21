import React, { Component } from 'react';
import { StyleSheet, TouchableOpacity, Text } from 'react-native';

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontWeight: 'bold',
  },
})
export default class DescriptionMovie extends Component {
  render() {
    const { 
      onDescriptionPress = () => {},
      storyline,
    } = this.props
    console.log({ storyline });
    return (
      <TouchableOpacity
        style={styles.container}
        onDescriptionPress={onDescriptionPress}
      >
        <Text style={styles.text}>{storyline}</Text>
      </TouchableOpacity>
    );
  };
};

