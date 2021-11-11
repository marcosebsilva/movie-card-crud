import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import * as movieAPI from '../services/movieAPI';
import { Loading, Footer } from '../components';
import starIcon from '../images/star.png';

class MovieDetails extends Component {
  constructor(props) {
    super(props);

    this.state = {
      movie: {},
      movieReady: false,
    };

    this.setMovie = this.setMovie.bind(this);
    this.deleteThisMovie = this.deleteThisMovie.bind(this);
    this.returnedMovie = this.returnedMovie.bind(this);
  }

  async componentDidMount() {
    const { match: { params } } = this.props;
    const { id } = params;
    const movieResponse = await movieAPI.getMovie(id);
    this.setMovie(movieResponse);
  }

  setMovie(movie) {
    this.setState({
      movie: { ...movie },
      movieReady: true,
    });
  }

  deleteThisMovie() {
    const { movie: { id } } = this.state;
    movieAPI.deleteMovie(id);
  }

  returnedMovie() {
    const { movie:
      { id,
        title,
        storyline,
        imagePath,
        genre,
        rating,
        subtitle,
      },
    } = this.state;
    return (
      <>
        <div className="c-movie-details">
          <img
            alt="Movie Cover"
            src={ `../${imagePath}` }
            className="c-movie-details__image"
          />
          <div className="movie-details">
            <h1 className="movie-details__title">{ title }</h1>
            <h2 className="movie-details__subtitle">{ `${subtitle}` }</h2>
            <div className="c-genre-edit">
              <p className="movie-details__genre">{ `${genre}` }</p>
              <Link
                to={ `/movies/${id}/edit` }
                className="movie-details__edit"
              >
                EDITAR
              </Link>
            </div>
            <p className="movie-details__storyline">{ `${storyline}` }</p>
            <div className="movie-details__rating">
              <img src={ starIcon } alt="star icon" />
              <p>{ `${rating} / 5` }</p>
            </div>
            <div className="c-bottom-buttons">
              <Link
                to="/"
                className="movie-details__back"
              >
                VOLTAR
              </Link>
              <Link
                to="/"
                onClick={ this.deleteThisMovie }
                className="movie-details__delete"
              >
                DELETAR
              </Link>
            </div>
          </div>
        </div>
        <Link
          to="/movies/new"
          className="add-button"
        >
          ADICIONAR CARTÃO
        </Link>
        <Footer />
      </>
    );
  }

  render() {
    const { movieReady } = this.state;
    return (
      <div data-testid="movie-details">
        {movieReady ? this.returnedMovie() : <Loading /> }
      </div>
    );
  }
}

MovieDetails.propTypes = {
  match: PropTypes.objectOf(Object).isRequired,
};
export default MovieDetails;
