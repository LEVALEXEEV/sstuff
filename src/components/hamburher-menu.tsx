import { Link } from 'react-router-dom';

function HamburgerMenu() {
    return (
    <div className="hamburger-menu">
      <label className="menu__btn" htmlFor="menu__toggle">
        <span></span>
      </label>
      <input id="menu__toggle" type="checkbox" />
      <ul className="menu__box">
          <li><Link className="menu__item" to="#">Каталог</Link></li>
          <li><Link className="menu__item" to="#">Доставка</Link></li>
          <li><Link className="menu__item" to="#">FQA</Link></li>
          <li><Link className="menu__item" to="#">Об авторах</Link></li>
      </ul>
  </div>   
    );
  }
  
  export default HamburgerMenu;