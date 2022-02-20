import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app/app';
import {movies} from './mock/mock';

ReactDOM.render(
  <React.StrictMode>
    <App
      title = {movies[0].title}
      genre = {movies[0].genre}
      release = {movies[0].release}
    />
  </React.StrictMode>,
  document.getElementById('root'));
