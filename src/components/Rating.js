import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableHighlight } from 'react-native';
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
})

export default class Rating extends Component {
  render() {
    const { star, like } = this.props

    if (star) {
      const starTotalNumber = Array.from({ length: 5 })
        .map((_, index) => (
          <TouchableHighlight
            key={`star-${index}`}
            underlayColor="transparent"
            onPress={() => {}}
          >
            <Icon 
              name="star"
              size={30}
              color="#f1c40f"
            />
          </TouchableHighlight>
        ))
      return (
        <View style={styles.starContainer}>
          {starTotalNumber}
        </View>
      )
    }

    return (
      <View>
        <Text></Text>
      </View>
    );
  };
};

