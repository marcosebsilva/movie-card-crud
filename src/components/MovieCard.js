import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

class MovieCard extends React.Component {
  render() {
    const { movie: { title, subtitle, storyline, id, imagePath } } = this.props;
    return (
      <div
        data-testid="movie-card"
        className="movie-card"
      >
        <img
          src={ imagePath }
          alt="Movie"
          className="movie-card__image"
        />
        <div className="card-details">
          <h1 className="card-details__title">{title}</h1>
          <h2 className="card-details__subtitle">{subtitle}</h2>
          <p className="card-details__sinopse">{storyline}</p>
          <Link className="card-details__button" to={ `movies/${id}` }>VER DETALHES</Link>
        </div>
      </div>
    );
  }
}

MovieCard.propTypes = {
  movie: PropTypes.objectOf(PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
    PropTypes.bool,
  ])).isRequired,
};

export default MovieCard;
