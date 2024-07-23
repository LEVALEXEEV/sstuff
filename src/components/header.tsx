import { Link } from 'react-router-dom';
import HamburgerMenu from './hamburher-menu';

type HeaderProps = {
  backLink?: string
}

function Header({backLink}: HeaderProps): JSX.Element {
  return (
    <section className="header__wrap">
      <header className="header">
        <div className='backlink__div'>
          <Link className="icon-link" to="/sstuff">
            <img src="/sstuff/img/icon.jpg" width={80}/>
          </Link>
          {
            (backLink) 
            ?
              <Link to={backLink}>
                {'< Back'}
              </Link>
            : undefined
          }
        </div>
        <HamburgerMenu/>
      </header>
    </section>
  );
}
export default Header;
