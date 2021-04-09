import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    padding: 100,
    justifyContent: 'center',
    alignItems: 'center',
  },
})

export default class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>Tanti</Text>
      </View>
    )
  }
}

