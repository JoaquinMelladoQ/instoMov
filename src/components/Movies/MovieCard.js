import React, { Component } from 'react';
import { 
  View, ActivityIndicator, 
  Text, Image, StyleSheet
} from 'react-native';
import Rating from '../Rating'

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
  title: {
    fontSize: 18,
    padding: 10,
    textAlign: 'center',
  },
  subtitle: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  description: {
    fontSize: 15,
    padding: 10,
  },
  textColor: {
    color: '#34495e',
  },
})

export default class MovieCard extends Component {
  constructor(props) {
    super(props);
  
    this.state = {
      isLoading: true,
      validImage: true,
    }
  }
  
  render() {
    const { posterurl, title, year, imdbRating } = this.props
    const { isLoading, validImage } = this.state
    return (
      <>
      <View style={styles.container}>
        { isLoading && <ActivityIndicator color="red" size="large" /> }
        <Image 
          style={styles.image}
          source={
            validImage
              ? { uri: posterurl }
              : require('../../assets/No_Image_Available.jpeg')
          }
          onError={() => this.setState({ validImage: false })}
          onLoadEnd={() => this.setState({ isLoading: false })}
        />
        <Text style={[styles.title, styles.textColor]}>{title}</Text>
          <Rating star />
        <View style={styles.subtitle}>
          <Text style={[styles.description, styles.textColor]}>{year}</Text>
          <Text style={[styles.description, styles.textColor]}>{imdbRating}</Text>
        </View>
      </View>
      </>
    );
  };
};

