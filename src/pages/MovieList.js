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

  renderMovieList(movies) {
    return (
      <>
        <Link
          to="/movies/new"
          className="add-button"
        >
          ADICIONAR CARTÃO
        </Link>
        {movies.map((movie) => <MovieCard key={ movie.title } movie={ movie } />)}
      </>
    );
  }

  render() {
    const { movies, movieReady } = this.state;
    return (
      <div
        data-testid="movie-list"
        className="movie-list"
      >
        { movieReady
          ? this.renderMovieList(movies)
          : <Loading /> }
      </div>
    );
  }
}

export default MovieList;
