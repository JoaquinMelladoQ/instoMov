//import React, { PureComponent } from 'react';
import React from 'react';
import Header from '../components/Header';
import MoviesList from '../components/Movies/MoviesList';

/*
 *export default class Home extends PureComponent {
 *  render() {
 *    const { movies } = this.props
 *    return (
 *      <>
 *        <Header title="La Cartelera"/>
 *        <MoviesList movies={movies}/>
 *      </>
 *    );
 *  };
 *};
 */

const Home = ({ movies, colors }) => {
  //console.log({ colors })
  return (
    <>
      <Header title="La Cartelera"/>
      <MoviesList 
        colors={colors}
        movies={movies}
      />
    </> 
  )
}

export default Home;
