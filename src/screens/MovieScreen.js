import React from 'react';
import { StyleSheet, ScrollView, Text, Button, View } from 'react-native';
import { useRoute } from '@react-navigation/core';
import MovieImage from './MovieImage';

const styles = StyleSheet.create({
  container: {
    marginTop: 30,
    backgroundColor: 'black',
  },
  textTitle: {
    padding: 10,
    backgroundColor: '#273c75',
    fontSize: 25,
    fontWeight: 'bold',
    color: 'white',
  },
  storyline: {
    backgroundColor: '#dcdde1',
  },
  textStory: {
    padding: 9,
    fontSize: 20,
  },
  image: {
    height: '100%',
    width: '100%',
  },
});

const MovieScreen = ({
  navigation, 
}) => { 
  const { params: { storyline, title, posterurl } } = useRoute();

  return (
    <>
      <ScrollView 
        style={styles.container}>
        <View style={styles.container}>
          <Text style={styles.textTitle}>{title}</Text>
          <Button 
            title= "Go Back" 
            onPress={() => navigation.pop()}/>
        </View>
        <View style={styles.image}>
          <MovieImage 
            posterurl={posterurl}
            source={{ uri: posterurl }}
          /> 
        </View>
        <View style={styles.storyline}>
          <Text style={styles.textStory}>{storyline}</Text>
        </View>
      </ScrollView>
    </>
  );
};

export default MovieScreen;
