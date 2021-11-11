import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import MovieCard from '../components/MovieCard';
import { Loading } from '../components';

import * as movieAPI from '../services/movieAPI';

class MovieList extends Component {
  constructor() {
    super();

    this.state = {
      movies: [],
      movieReady: false,
    };
  }

  async componentDidMount() {
    const moviesResponse = await movieAPI.getMovies();
    this.setMovies(moviesResponse);
  }

  setMovies(returnedMovies) {
    this.setState({
      movies: [...returnedMovies],
      movieReady: true,
    });
  }

  render() {
    const { movies, movieReady } = this.state;
    return (
      <>
        <div
          data-testid="movie-list"
          className="movie-list"
        >
          { movieReady
            ? movies.map((movie) => <MovieCard key={ movie.title } movie={ movie } />)
            : <Loading /> }
        </div>
        <Link
          to="/movies/new"
        >
          ADICIONAR CARTÃO
        </Link>
      </>
    );
  }
}

export default MovieList;
