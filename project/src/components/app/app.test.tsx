import {render, screen} from '@testing-library/react';
import App from './app';
import React from 'react';

const PromoFilm = {
  TITLE: 'The Grand Budapest Hotel',
  GENRE: 'Drama',
  RELEASE: 2014,
};

test('Renders app-component', () => {
  render(
    <App
      title = {PromoFilm.TITLE}
      genre = {PromoFilm.GENRE}
      release = {PromoFilm.RELEASE}
    />,
  );
  const textElement = screen.getByText(/The Grand Budapest Hotel/i);
  expect(textElement).toBeInTheDocument();
});
