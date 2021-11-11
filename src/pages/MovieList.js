import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Footer, Loading, MovieCard } from '../components';

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
        <div
          data-testid="movie-list"
          className="movie-list"
        >
          {movies.map((movie) => <MovieCard key={ movie.title } movie={ movie } />)}
        </div>
        <Link
          to="/movies/new"
          className="add-button"
        >
          ADICIONAR CARTÃO
        </Link>
      </>
    );
  }

  render() {
    const { movies, movieReady } = this.state;
    return (
      <>
        { movieReady
          ? this.renderMovieList(movies)
          : <Loading /> }
        <Footer />
      </>
    );
  }
}

export default MovieList;
