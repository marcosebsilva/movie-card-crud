import React from 'react';
import { Link } from 'react-router-dom';

export default class Header extends React.Component {
  render() {
    return (
      <header>
        <h1>MOVIE CARD LIBRARY</h1>
        <Link
          className="add-button"
          to="/movies/new"
        >
          ADICIONAR CARTÃO
        </Link>
      </header>
    );
  }
}
