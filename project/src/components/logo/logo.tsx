import {Link} from 'react-router-dom';
import {AppRoute, LogoPosition} from '../../const';

type LogoPositionProps = {
  position: string,
}

function Logo({position}: LogoPositionProps): JSX.Element {
  const loginFooterClass: string = (position === LogoPosition.Footer) ? 'logo__link logo__link--light' : 'logo__link';

  return (
    <div className="logo">
      <Link to={AppRoute.Root} className={loginFooterClass}>
        <span className="logo__letter logo__letter--1">W</span>
        <span className="logo__letter logo__letter--2">T</span>
        <span className="logo__letter logo__letter--3">W</span>
      </Link>
    </div>
  );
}

export default Logo;
