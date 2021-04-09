import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';
import Home from './screens/Home';

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
        <Home />
      </View>
    )
  }
}

