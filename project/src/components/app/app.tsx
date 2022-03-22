import {Route, BrowserRouter, Routes} from 'react-router-dom';
import {AppRoute, AuthorizationStatus} from '../../const';
import MainScreen from '../main-screen/main-screen';
import React from 'react';
import LoginScreen from '../login-screen/login-screen';
import MyListScreen from '../mylist-screen/mylist-screen';
import PlayerScreen from '../player-screen/player-screen';
import FilmDetailScreen from '../film-detail-screen/film-detail-screen';
import AddReviewScreen from '../add-review-screen/add-review-screen';
import NotFoundScreen from '../not-found-screen/not-found-screen';
import PrivateRoute from '../private-route/private-route';
import {Film} from '../../types/film';
import {Review} from '../../types/review';

type AppScreenProps = {
  promoFilm: {
    title: string,
    genre: string,
    release: number,
  };
  films: Film[];
  reviews: Review[];
}

function App({promoFilm, films, reviews}: AppScreenProps): JSX.Element {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path={AppRoute.Root}
          element={
            <MainScreen
              promoFilm={promoFilm}
              films={films}
            />
          }
        />
        <Route
          path={AppRoute.Login}
          element={<LoginScreen />}
        />
        <Route
          path={AppRoute.Films}
          element={<FilmDetailScreen />}
        />
        <Route
          path={AppRoute.AddReview}
          element={
            <PrivateRoute
              authorizationStatus={AuthorizationStatus.NoAuth}
            >
              <AddReviewScreen />
            </PrivateRoute>
          }
        />
        <Route
          path={AppRoute.MyList}
          element={
            <PrivateRoute
              authorizationStatus={AuthorizationStatus.NoAuth}
            >
              <MyListScreen />
            </PrivateRoute>
          }
        />
        <Route
          path={AppRoute.Player}
          element={<PlayerScreen />}
        />
        <Route
          path="*"
          element={<NotFoundScreen />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
