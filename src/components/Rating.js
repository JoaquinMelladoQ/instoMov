import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableHighlight, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const styles = StyleSheet.create({
  starContainer: {
    marginVertical: 5,
    alignSelf: 'center',
    flexDirection: 'row',
    padding: 5,
    borderRadius: 25,
    borderWidth: 1,
    borderColor: '#95a5a6'
  },
  heart: {
    padding: 5,
  },
})

export default class Rating extends Component {
  render() {
    const { 
      star, starNumber = 5,
      starRating, onRatingPress = () => {}, 
      heart, like
    } = this.props

    if (star) {
      const starTotalNumber = Array.from({ length: starNumber })
        .map((_, index) => (
          <TouchableHighlight
            key={`star-${index}`}
            underlayColor="transparent"
            onPress={() => onRatingPress(index + 1)}
          >
            <Icon 
              name="star"
              size={30}
              color={index < starRating ? '#f1c40f' : '#95a6a6'}
            />
          </TouchableHighlight>
        ))
      return (
        <View style={styles.starContainer}>
          {starTotalNumber}
        </View>
      )
    }
    if (heart) {
      return (
        <TouchableOpacity 
          style={styles.heart}
          onPress={onRatingPress}
        >
          <Icon 
            name="heart" 
            size={30} 
            color={like ? '#e74c3c' : '#95a6a6'}
          />
        </TouchableOpacity>
      ) 
    }
    return null
  };
};

