import "./Sidebar.css";
import { NavLink } from "react-router-dom";
import data from "./data";
import { useState } from "react";

const Sidebar = () => {
  const [menuSide, setMenuSide] = useState("")
  return (
    <div className="sidebar">
      <div className="container sidebar__container">
        <ul className="sidebar__menu">
          {data.map((item) => (
            <li key={item.id} >
              <NavLink to={item.link}>{item.title}</NavLink>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
