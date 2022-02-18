import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app/app';
import {PromoFilm} from './mock/mock';

ReactDOM.render(
  <React.StrictMode>
    <App
      title = {PromoFilm.title}
      genre = {PromoFilm.genre}
      release = {PromoFilm.release}
    />
  </React.StrictMode>,
  document.getElementById('root'));
