import React, { Component } from 'react';
import { Footer } from '.';

class Loading extends Component {
  render() {
    return (
      <>
        <div className="loading">
          <div className="loading__circle" />
          <p className="loading__text">Carregando...</p>
        </div>
        <Footer />
      </>
    );
  }
}

export default Loading;
