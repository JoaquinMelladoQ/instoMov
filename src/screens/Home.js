import React from 'react';
import Header from '../components/Header';
import MoviesList from '../components/Movies/MoviesList';

const Home = ({ movies, colors }) => {
  return (
    <>
      <Header title="La Cartelera"/>
      <MoviesList 
        colors={colors}
        movies={movies}
      />
    </> 
  );
};

export default Home;
