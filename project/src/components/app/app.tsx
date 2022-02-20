import MainScreen from '../main-screen/main-screen';
import React from 'react';

type AppScreenProps = {
  title: string,
  genre: string,
  release: number,
}

function App({title, genre, release}: AppScreenProps): JSX.Element {
  return (
    <MainScreen
      title = {title}
      genre = {genre}
      release = {release}
    />
  );
}

export default App;
