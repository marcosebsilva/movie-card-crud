import React, { Component } from 'react';
import funnyGuy from '../images/funny_guy.png';

class NotFound extends Component {
  render() {
    return (
      <>
        <div data-testid="404-error">
          Página não encontrada.
        </div>
        <img
          src={ funnyGuy }
          alt="Hulk dancing"
        />
      </>
    );
  }
}

export default NotFound;
