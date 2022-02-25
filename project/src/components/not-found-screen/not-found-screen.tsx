import {Link} from 'react-router-dom';
import Logo from '../logo/logo';
import {AppRoute, LogoPosition} from '../../const';
import Footer from '../footer/footer';
import User from '../user/user';

function NotFoundScreen(): JSX.Element {
  return (
    <>
      <section className="film-card">
        <div className="film-card__bg">
          <img src="img/bg-the-grand-budapest-hotel.jpg" alt="The Grand Budapest Hotel"/>
        </div>
        <header className="page-header film-card__head">
          <Logo position = {LogoPosition.Header} />

          <h1 className="page-title user-page__title">404. Page not found</h1>

          <User />
        </header>
      </section>

      <div className="page-content">
        <section className="catalog">
          <Link to={AppRoute.Root} className="catalog__title">Вернуться на главную</Link>
        </section>

        <Footer />
      </div>
    </>
  );
}

export default NotFoundScreen;
