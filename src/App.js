import React from 'react';
import { StatusBar, SafeAreaView, StyleSheet } from 'react-native';
import Home from './screens/Home';
import movies from './lib/movies.json';
import colors from './lib/colors.json';

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#34495e',
  },
})

export default App = () => {
    return (
      <SafeAreaView style={styles.container}>
        <StatusBar barStyle={'dark-content'}/>
        <Home 
          colors={colors}
          movies={movies}
        />
      </SafeAreaView>
    )
}

