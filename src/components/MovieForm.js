import React from 'react';
import PropTypes from 'prop-types';
import { Footer } from '.';

class MovieForm extends React.Component {
  constructor(props) {
    super(props);
    const { movie } = this.props;
    this.state = { ...movie };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit() {
    const { onSubmit } = this.props;
    onSubmit(this.state);
  }

  updateMovie(field, newValue) {
    this.setState({ [field]: newValue });
  }

  renderTitleInput() {
    const { title } = this.state;

    return (
      <label htmlFor="movie_title" className="movie-form__row">
        Título
        <input
          placeholder="Insira o título"
          id="movie_title"
          type="text"
          className="validate movie-form__input"
          value={ title }
          onChange={ (event) => this.updateMovie('title', event.target.value) }
        />
      </label>
    );
  }

  renderSubtitleInput() {
    const { subtitle } = this.state;

    return (
      <label htmlFor="movie_subtitle" className="movie-form__row">
        Subtítulo
        <input
          placeholder="Insira o subtítulo"
          id="movie_subtitle"
          type="text"
          className="movie-form__input"
          value={ subtitle }
          onChange={ (event) => this.updateMovie('subtitle', event.target.value) }
        />
      </label>
    );
  }

  renderImagePathInput() {
    const { imagePath } = this.state;

    return (
      <label htmlFor="movie_image" className="movie-form__row">
        Imagem
        <input
          placeholder="Insira o caminho da imagem"
          id="movie_image"
          type="text"
          value={ imagePath }
          className="movie-form__input"
          onChange={ (event) => this.updateMovie('imagePath', event.target.value) }
        />
      </label>
    );
  }

  renderStorylineInput() {
    const { storyline } = this.state;

    return (
      <label htmlFor="movie_storyline" className="movie-form__row">
        Sinopse
        <textarea
          className="movie-form__input"
          id="movie_storyline"
          value={ storyline }
          onChange={ (event) => this.updateMovie('storyline', event.target.value) }
        />
      </label>
    );
  }

  renderGenreSelection() {
    const { genre } = this.state;
    return (
      <label htmlFor="movie_genre" className="movie-form__row">
        Gênero
        <select
          className="movie-form__input"
          id="movie_genre"
          value={ genre }
          onChange={ (event) => this.updateMovie('genre', event.target.value) }
        >
          <option value="action">Ação</option>
          <option value="comedy">Comédia</option>
          <option value="thriller">Suspense</option>
          <option value="fantasy">Fantasia</option>
        </select>
      </label>
    );
  }

  renderRatingInput() {
    const { rating } = this.state;
    return (
      <label htmlFor="movie_rating" className="movie-form__row">
        Avaliação
        <input
          className="movie-form__input"
          placeholder="Dê a avaliação do filme"
          id="movie_rating"
          type="number"
          step={ 0.1 }
          min={ 0 }
          max={ 5 }
          value={ rating }
          onChange={ (event) => this.updateMovie('rating', event.target.value) }
        />
      </label>
    );
  }

  renderSubmitButton() {
    return (
      <button
        type="button"
        onClick={ this.handleSubmit }
        className="add-button"
      >
        Submit
      </button>
    );
  }

  render() {
    return (
      <>
        <form className="movie-form">
          {this.renderTitleInput()}
          {this.renderSubtitleInput()}
          {this.renderImagePathInput()}
          {this.renderStorylineInput()}
          {this.renderGenreSelection()}
          {this.renderRatingInput()}
        </form>
        {this.renderSubmitButton()}
        <Footer />
      </>
    );
  }
}
MovieForm.defaultProps = {
  movie: false,
};

MovieForm.propTypes = {
  movie: PropTypes.oneOfType([
    PropTypes.bool,
    PropTypes.objectOf(String),
  ]),
  onSubmit: PropTypes.func.isRequired,
};

export default MovieForm;
