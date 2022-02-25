import Logo from '../logo/logo';
import {LogoPosition} from '../../const';

function Footer(): JSX.Element {
  return (
    <footer className="page-footer">
      <Logo position = {LogoPosition.Footer} />

      <div className="copyright">
        <p>© 2019 What to watch Ltd.</p>
      </div>
    </footer>
  );
}

export default Footer;
