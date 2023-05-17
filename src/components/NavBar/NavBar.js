import React from "react";
import CartWidget from "../CardWidget/CartWidget";
import { Link } from "react-router-dom";
import "./NavBar.css"
// import ImgLogo from "./src/assets/icons8-desk-64.png"



function Navbar() {
  return (
    <>
    <div className="header">
        <div className="container">
          <div className="logo">
            <Link to="/home" ><h2>Ergo<span>Tech</span></h2></Link>
            {/* <img src={ImgLogo}></img> */}
            
          </div>

          <nav className="links">
            <ul>
              <li><Link to="/" >Catalogo</Link></li>
              <li><Link to="/catalogo">Nosotros</Link></li>
              <li><Link to="/nosotros">Mas info</Link></li>
            </ul>
          </nav>
        </div>
      </div>
    </>
  );
}

export default Navbar;