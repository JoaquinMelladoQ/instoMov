import React, { PureComponent } from 'react';
import { View, Text, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    padding: 10,
    margin: 20,
    backgroundColor: '#bdc3c7',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10
  }
})

export default class Header extends PureComponent {
  render() {
    return (
      <View style={styles.container}>
        <Text>Cartelera</Text>
      </View>
    );
  };
};

