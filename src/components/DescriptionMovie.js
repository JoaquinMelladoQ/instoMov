import React, { Component } from 'react';
import { StyleSheet, View, Text } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingBottom: 10,
    backgroundColor: '#dfe6e9',
  },
  text: {
    marginHorizontal: 10,
    fontWeight: 'bold',
    fontStyle: 'italic',
  },
});

export default class DescriptionMovie extends Component {
  render() {
    const { 
      storyline,
    } = this.props;

    return (
      <View style={styles.container}>
        <Text style={styles.text}>{storyline}</Text>
      </View>
    );
  };
};

