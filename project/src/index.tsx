import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app/app';

const PromoFilm = {
  TITLE: 'The Grand Budapest Hotel',
  GENRE: 'Drama',
  RELEASE: 2014,
};

ReactDOM.render(
  <React.StrictMode>
    <App
      title = {PromoFilm.TITLE}
      genre = {PromoFilm.GENRE}
      release = {PromoFilm.RELEASE}
    />
  </React.StrictMode>,
  document.getElementById('root'));
