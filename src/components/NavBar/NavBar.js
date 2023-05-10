import React from "react";
import CartWidget from "../CardWidget/CartWidget";
import { Link } from "react-router-dom";



function Navbar() {
  return (
    <nav className="navbar bg-primary navbar-expand-lg  ">
  <div classNameName="container-fluid">
    <a className="navbar-brand" href="#">Ergo Tech</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav">
        <li >
          <Link to='/'>Home</Link>
        </li>
        <li >
          <Link to='/about'></Link>
        </li>
        <li >
          <Link to='/contact'><CartWidget/></Link>
        </li>
      </ul>
    </div>
  </div>
  
</nav>
  );
}

export default Navbar;