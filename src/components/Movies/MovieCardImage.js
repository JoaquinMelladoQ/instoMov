import React from 'react'
import { Image, StyleSheet, TouchableHighlight } from 'react-native'

const styles = StyleSheet.create({
  image: {
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
    height: 300,
    width: '100%',
    backgroundColor: '#34495e',
  },
})

const MovieCardImage = ({
  validImage,
  posterurl,
  onError = () => {},
  onLoadEnd = () => {},
}) => {
  return (
    <TouchableHighlight
      onLongPress={() => {}}
      underlayColor="black"
    >
        <Image 
          style={styles.image}
          source={
            validImage
              ? { uri: posterurl }
              : require('../../assets/No_Image_Available.jpeg')
          }
          onError={onError}
          onLoadEnd={onLoadEnd}
        />
    </TouchableHighlight>
  )
}

export default MovieCardImage
