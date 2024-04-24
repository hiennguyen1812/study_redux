import { Link, NavLink } from "react-router-dom";
import data from "./data";
import logo from "../../access/logo.png";
import S from "../../access/S.png"
import { CiShoppingCart } from "react-icons/ci";
import "./Navbar.css";
import { useState } from "react";
import CartImg from "../../access/cart_icon.png";

const Navbar = () => {
  const [menu, setMenu] = useState("");
  return (
    <div className="navbar">
      <div className="nav__container">
        <NavLink className="nav__logo" to="/">
          <img src={S} alt="Logo" />
        </NavLink>
        <ul className="nav__menu">
          <li
            onClick={() => {
              setMenu("home");
            }}
          >
            <a href="#">Home{menu === "home" ? <hr /> : <></>}</a>
          </li>

          <li
            onClick={() => {
              setMenu("sneaker");
            }}
          >
            <a href="#sneaker">Sneaker{menu === "sneaker" ? <hr /> : <></>}</a>
          </li>

          <li
            onClick={() => {
              setMenu("clothes");
            }}
          >
            <a href="#clothes">Clothes{menu === "clothes" ? <hr /> : <></>}</a>
          </li>

          <li
            onClick={() => {
              setMenu("about");
            }}
          >
            <a href="#about">About{menu === "about" ? <hr /> : <></>}</a>
          </li>

          <li
            onClick={() => {
              setMenu("service");
            }}
          >
            <a href="#service">Service{menu === "service" ? <hr /> : <></>}</a>
          </li>

          <li
            onClick={() => {
              setMenu("contact");
            }}
          >
            <a href="#contact">Contact{menu === "contact" ? <hr /> : <></>}</a>
          </li>
        </ul>
        <div className="nav__option container">
          <button className="btn btn-primary">
            <NavLink to="login">Login</NavLink>
          </button>
          <button className="btn btn-primary">
            <NavLink>Sign up</NavLink>
          </button>
          <div className="logo__cart">
            <Link to="/cart">
              <img src={CartImg} />
            </Link>
            <div className="nav_cart_count">0</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
