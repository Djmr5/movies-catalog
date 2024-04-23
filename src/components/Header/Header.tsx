import { NavLink } from "react-router-dom";
import { ROUTES } from "../../routes/constants";
import './Header.css';

const Header: React.FC = () => {
  return (
    <nav className="navbar">
      <h2 id="logo">
        Movies DB
      </h2>
      <ul id="routes">
        <li className="route">
          <NavLink className="route__link" to={ROUTES.HOME}>Home</NavLink>
        </li>
        <li className="route">
          <NavLink className="route__link" to={ROUTES.POPULAR}>Popular</NavLink>
        </li>
        <li className="route">
          <NavLink className="route__link" to={ROUTES.TOP_RATED}>Top rated</NavLink>
        </li>
        <li className="route">
          <NavLink className="route__link" to={ROUTES.NOW_PLAYING}>Now playing</NavLink>
        </li>
        <li className="route">
          <NavLink className="route__link" to={ROUTES.MY_FAVORITES}>My favorites</NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default Header;
