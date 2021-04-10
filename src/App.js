import React from 'react';
import { StatusBar, SafeAreaView } from 'react-native';
import Home from './screens/Home';
import movies from './lib/movies.json';

export default App = () => {
    return (
      <SafeAreaView>
        <StatusBar barStyle={'dark-content'}/>
        <Home movies={movies}/>
      </SafeAreaView>
    )
}

