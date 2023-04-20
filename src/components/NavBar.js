import React from "react";

export const NavBar = () => {
  return (
    <nav class="navbar navbar-expand-lg bg-dark justify-content-center ">
      
      <div class="">
        <h2 class="navbar-brand text-light fs-2 justify-content-center" href="#">ERGOTECH</h2>

        <div class="collapse navbar-collapse" id="navbarSupportedContent">

          <ul class="nav fs-4">
            <li class="nav-item">
              <a class="nav-link text-light" aria-current="page" href="#">Active</a>
            </li>
            <li class="nav-item">
              <a class="nav-link text-light" href="#">Link</a>
            </li>
            <li class="nav-item">
              <a class="nav-link text-light" href="#">Link</a>
            </li>
            <li class="nav-item">
              <a class="nav-link text-light">Comunicate</a>
            </li>
          </ul>
        </div>
      </div>
      
    </nav>
  );
}

export default NavBar;