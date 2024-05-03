import { useState } from "react";
import { NavLink, Link } from "react-router-dom";
import { ROUTES } from "../../routes/constants";
import './Header.css';
import classNames from "classnames";

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleMenu = () => {
    setIsOpen(!isOpen);
  }

  const routesStyle = classNames({
    'routes': true,
    'hidden md:flex': !isOpen,
  });

  return (
    <nav id="navbar">
      <div id="navbar__logo-hamburguer">
        <Link to={ROUTES.HOME} id="logo">
          Movies DB
        </Link>
        <button id="hamburguer" onClick={handleMenu}>
          <svg className="w-4" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="bars"
            role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
            <path fill="white"
              d="M16 132h416c8.837 0 16-7.163 16-16V76c0-8.837-7.163-16-16-16H16C7.163 60 0 67.163 0
          76v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837
          0-16 7.163-16 16v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163
          16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16z">
            </path>
          </svg>
        </button>
      </div>
      <ul className={routesStyle}>
        <NavLink className="route__link" to={ROUTES.HOME}>Home</NavLink>
        <NavLink className="route__link" to={ROUTES.POPULAR}>Popular</NavLink>
        <NavLink className="route__link" to={ROUTES.TOP_RATED}>Top rated</NavLink>
        <NavLink className="route__link" to={ROUTES.NOW_PLAYING}>Now playing</NavLink>
        <NavLink className="route__link" to={ROUTES.MY_FAVORITES}>My favorites</NavLink>
      </ul>
    </nav>
  );
}

export default Header;
