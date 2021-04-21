import React, { PureComponent } from 'react';
import { FlatList, View, StyleSheet, Modal, Button } from 'react-native';
import MovieCard from './MovieCard';
import FilterButton from '../FilterButton';
import Filters from '../Filters';

const styles = StyleSheet.create({
  list: {
    margin: 10,
  },
  filterButton: {
    position: 'absolute',
    top: '70%',
    left: '80%',
  },
})

export default class MoviesList extends PureComponent {
    constructor(props) {
      super(props)
      this.state = { 
        movies: props.movies,
        modalActive: false,
        moviesGenres: [],
      }
    }
  
  componentDidMount() {
    this.getGenresDataFromMovies()
  };
  

  getGenresDataFromMovies = () => {
    const { movies } = this.props;

    const genresData = movies.reduce((genresTypes, movie) => {
      return [ ...genresTypes, ...movie.genres ]
    }, [])

    //console.log({ genresData });

    const genresSet = new Set(genresData) // elimina repetidos
    this.setState({ moviesGenres: [ ...genresSet ] }) // regresa a un arreglo con spead
  }

  toggleModal = () => this.setState(({ modalActive }) => ({ modalActive: !modalActive }))

  applyFilter = (genre) => {
    const { movies } = this.props
    const filteredMovies = movies.filter((movie) => 
      movie.genres.includes(genre)
    ) 
    this.setState({ movies: filteredMovies, modalActive: false },
      () => {
        this.flatlist.scrollToOffset({ animated: true, offset:0 })
      }
    )
  }

  render() {
    const { moviesGenres, modalActive, movies } = this.state

    return (
      <>
        <FlatList
          ref={(ref) => (this.flatlist = ref)}
          style={styles.list}
          data={movies}
          keyExtractor={({ poster }) => poster}
          showsVerticalScrollIndicator={false}
          renderItem={({ 
            item: { 
              posterurl,
              year,
              title,
              imdbRating,
              actors,
              storyline,
            }
          }) => {
            return (
              <MovieCard 
                posterurl={posterurl}
                year={year}
                title={title}
                imdbRating={imdbRating}
                actors={actors}
                storyline={storyline}
              />
            )
          }}
        />
        <View style={styles.filterButton}>
          <FilterButton onPress={this.toggleModal}/>
        </View>
        <Modal
          visible={modalActive}
          animationType="slide"
        >
          <Filters 
            moviesGenres={moviesGenres} 
            onPress={this.applyFilter}
          />
          <Button title="Cerrar Modal" onPress={this.toggleModal} />
        </Modal>
      </>
    );
  };
};

