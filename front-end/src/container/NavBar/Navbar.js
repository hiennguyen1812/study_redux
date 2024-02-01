import { NavLink } from "react-router-dom";
import data from "./data";
import  logo  from "../../access/logo.png"
import "./Navbar.css";

const Navbar = () => {
  return (
    <div className="nav">
      <div className="container nav__container">
        <NavLink className="nav__logo" to="/">
            <img src={logo} alt="Logo" />
        </NavLink>
        <ul className="nav__menu">
          {data.map((nav) => (
            <li key={nav.id}>
              <NavLink to={nav.link}>{nav.title}</NavLink>
            </li>
          ))}
        </ul>
        <div className="nav__option container">
          <button className="btn btn-primary">Login</button>
          <button className="btn btn-primary">Sign up</button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
