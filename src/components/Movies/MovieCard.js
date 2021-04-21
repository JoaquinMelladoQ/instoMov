import React, { Component } from 'react';
import { 
  View, ActivityIndicator, TouchableOpacity, 
  Text, Image, Button, Modal, StyleSheet
} from 'react-native';
import Rating from '../Rating'
import MovieCardImage from './MovieCardImage'
import MovieFullscreenImage from './MovieFullscreenImage'
import ActorsList from './ActorsList'
import DescriptionMovie from '../DescriptionMovie'

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
  descriptionTextContainer: {
    height: 50, 
    backgroundColor: '#636e72',
  },
  textCerrarModal: {
    textAlign: 'center', 
    justifyContent: 'center', 
    color: 'white', 
    fontWeight: 'bold',
  }
})

export default class MovieCard extends Component {
  constructor(props) {
    super(props);
  
    this.state = {
      isLoading: true,
      validImage: true,
      starRating: 1,
      like: false,
      showFullscreenImage: false,
      modalDescriptionOpen: false,
    }
  }


  starRatingChange = starPosition => this.setState({ starRating: starPosition }) 

  toggleLike = () => this.setState(({ like }) => ({ like: !like }))

  toggleFullscreen = () => this.setState(({ showFullscreenImage }) => ({ showFullscreenImage: !showFullscreenImage }))

  toggleModalDescription = () => this.setState(({ modalDescriptionOpen }) => ({ modalDescriptionOpen: !modalDescriptionOpen }))

  render() {
    const { posterurl, title, year, imdbRating, actors, storyline } = this.props
    const { 
      showFullscreenImage, 
      isLoading, 
      validImage, 
      starRating, 
      like,
      modalDescriptionOpen,
    } = this.state
    //console.log({  });
    return (
      <>
      <View style={styles.container}>
        { isLoading && <ActivityIndicator color="red" size="large" /> }
        { 
          showFullscreenImage 
          && validImage 
          && <MovieFullscreenImage 
                onPress={this.toggleFullscreen}
                source={{ uri: posterurl }}
              /> 
        }
        <MovieCardImage 
          validImage={validImage}
          posterurl={posterurl}
          onError={() => this.setState({ validImage: false })}
          onLoadEnd={() => this.setState({ isLoading: false })}
          onLongPress={this.toggleFullscreen}
        />
        <View style={styles.likeRating}>
          <Rating 
            heart
            like={like} 
            onRatingPress={this.toggleLike}
          />
        </View>
        <Text style={[styles.title, styles.textColor]}>{title}</Text>
        <View style={styles.subtitle}>
          <Text style={[styles.description, styles.textColor]}>{year}</Text>
          <Rating 
            star
            starRating={starRating}
            onRatingPress={this.starRatingChange}
          />
          <Text 
            style={[styles.description, styles.textColor, styles.bigFont]}>
            {imdbRating}
          </Text>
        </View>
        <View>
          <Button title="Ver Descripción" onPress={this.toggleModalDescription}/>
        </View>
        <Modal
          visible={modalDescriptionOpen}
          animationType="slide"
        >
          <DescriptionMovie 
            storyline={storyline}
          />
          <View style={styles.descriptionTextContainer}>
            <TouchableOpacity onPress={this.toggleModalDescription}>
              <Text style={styles.textCerrarModal}>Cerrar</Text>
            </TouchableOpacity>
          </View>
        </Modal>
        <ActorsList actors={actors}/>
      </View>
      </>
    );
  };
};

