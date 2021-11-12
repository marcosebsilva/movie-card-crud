import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Footer } from '../components';
import funnyGuy from '../images/funny_guy.png';

class NotFound extends Component {
  render() {
    return (
      <>
        <div className="not-found">
          <img
            src={ funnyGuy }
            alt="He doesnt know"
            className="not-found__image"
          />
          <p data-testid="404-error">
            Página não encontrada.
          </p>
        </div>
        <Link
          to="/"
          className="add-button"
        >
          Voltar para o inicio
        </Link>
        <Footer />
      </>
    );
  }
}

export default NotFound;
