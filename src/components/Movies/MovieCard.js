import React, { useState } from 'react';
import { 
  View, ActivityIndicator, TouchableOpacity, 
  Text, Button, Modal, StyleSheet
} from 'react-native';
import Rating from '../Rating';
import MovieCardImage from './MovieCardImage';
import MovieFullscreenImage from './MovieFullscreenImage';
import ActorsList from './ActorsList';
import GenresList from './GenresList';
import DescriptionMovie from '../DescriptionMovie';
import { useRoute, useNavigation } from '@react-navigation/core';

const styles = StyleSheet.create({
  container: {
    borderRadius: 15,
    backgroundColor: '#ecf0f1',
    marginBottom: 20,
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
  bigFont: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  likeRating: {
    position: 'absolute',
    left: 20,
    top: 20,
    borderRadius: 30,
    padding: 0,
    elevation: 10,
    backgroundColor: 'white',
    zIndex: 9,
  },
  descriptionContainer: {
    height: 50, 
    backgroundColor: '#636e72',
  },
  textModal: {
    textAlign: 'center', 
    justifyContent: 'center', 
    color: 'white', 
    fontWeight: 'bold',
  }
});

const MovieCard = ({     
  posterurl, title, 
  year, imdbRating, 
  actors, storyline, 
  genres, 
  colors, }) => {
  const [isLoading, setLoading] = useState(true);
  const [validImage, setValidImage] = useState(true);
  const [starRating, setStarRating] = useState(1);
  const [like, setLike] = useState(false);
  const [showFullscreenImage, setShowFullscreen] = useState(false);
  const [modalDescriptionOpen, setModalDescriptionOpen] = useState(false);

  const starRatingChange = (starPosition) => setStarRating(starPosition);
  const toggleLike = () => setLike(!like);
  const toggleFullScreen = () => setShowFullscreen(!showFullscreenImage);
  const toggleModalDescription = () => setModalDescriptionOpen(!modalDescriptionOpen);

  const routes = useRoute();
  const navigation = useNavigation();

  return (
    <>
    <View style={styles.container}>
      { isLoading && <ActivityIndicator color="red" size="large" /> }
      { 
        showFullscreenImage 
        && validImage 
        && <MovieFullscreenImage 
              onPress={toggleFullScreen}
              source={{ uri: posterurl }}
            /> 
      }
      <MovieCardImage 
        validImage={validImage}
        posterurl={posterurl}
        onError={() => setValidImage(validImage)}
        onLoadEnd={() => setLoading(isLoading)}
        onLongPress={
          () => navigation.navigate('MovieScreen')
        }
      />
      <View style={styles.likeRating}>
        <Rating 
          heart
          like={like} 
          onRatingPress={toggleLike}
        />
      </View>
      <Text style={[styles.title, styles.textColor]}>{title}</Text>
      <View style={styles.subtitle}>
        <Text style={[styles.description, styles.textColor]}>{year}</Text>
        <Rating 
          star
          starRating={starRating}
          onRatingPress={starRatingChange}
        />
        <Text 
          style={[styles.description, styles.textColor, styles.bigFont]}>
          {imdbRating}
        </Text>
      </View>
      <View>
        <Button title="Ver Descripción" onPress={toggleModalDescription}/>
      </View>
      <Modal
        visible={modalDescriptionOpen}
        animationType="fade"
      >
        <DescriptionMovie 
          storyline={storyline}
        />
        <View style={styles.descriptionContainer}>
          <TouchableOpacity onPress={toggleModalDescription}>
            <Text style={styles.textModal}>Cerrar</Text>
          </TouchableOpacity>
        </View>
      </Modal>
      <GenresList 
        colors={colors}
        genres={genres}
      />
      <ActorsList actors={actors}/>
    </View>
    </>
  );
};

export default MovieCard;
