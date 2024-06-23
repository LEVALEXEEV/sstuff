import { Link } from 'react-router-dom';
import HamburgerMenu from './hamburher-menu';

function Header(): JSX.Element {
  return (
    <section className="header_wrap">
      
        <header className="header">
        <Link to="/">
            <img src="img/icon.jpg" width={80}/>
        </Link>
        <HamburgerMenu/>
      </header>
      
    </section>
  );
}
export default Header;
