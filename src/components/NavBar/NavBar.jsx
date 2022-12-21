import React from "react";
import { Link } from "react-router-dom";
import { useCartContext } from "../../context/cartContext";
import CartWidget from "../CartWidget/CartWidget";
import LogoWidget from "../LogoWidget/LogoWidget";
import "./NavBar.css";

function NavBar() {
  const { totalQuantity } = useCartContext();

  return (
    <header className="containerNavBar">
      <LogoWidget />
      <div className="containerNavBarList">
        <ul className="navBarList">
          <li>
            <Link to="/ItemListContainer">INICIO</Link>
          </li>
          <li>
            <Link to="/categoria/skate">SKATE</Link>
          </li>
          <li>
            <Link to="/categoria/surf">SURF</Link>
          </li>
          <li>
            <Link to="/categoria/snow">SNOW</Link>
          </li>
          <li>
            <Link to="/categoria/long">LONG</Link>
          </li>
        </ul>
      </div>
      <div className="navBarIcono">
        <Link to="/Cart">
          <CartWidget />
        </Link>
        {totalQuantity() !== 0 && totalQuantity()}
      </div>
    </header>
  );
}
export default NavBar;
