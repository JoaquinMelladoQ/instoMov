import React, { PureComponent } from 'react';
import { View, Text, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    padding: 20,
    margin: 34,
    backgroundColor: '#bdc3c7',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
  },
  title: {
    color: '#34495e',
    fontSize: 35,
    fontWeight: 'bold',
    textDecorationLine: 'underline',
  }
})

export default class Header extends PureComponent {
  render() {
    const { title } = this.props
    return (
      <View style={styles.container}>
        <Text style={styles.title}>{title}</Text>
      </View>
    );
  };
};

