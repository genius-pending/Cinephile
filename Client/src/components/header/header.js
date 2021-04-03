import React from "react";
import "./header.css";
import navbarimage from "./navbarimage.jpg"

const Header = () => {

  return(
  <nav class="navbar navbar-expand-lg navbar navbar-dark bg-dark">
   <a class="navbar-brand" href="www.google.com"><img src = {navbarimage} alt ="logo" style={{width:"45px"}}></img> Cinephille</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav m-auto">
        <li class="nav-item">
        <a class="nav-link text-white text-uppercase px-15" aria-current="page" href="www.google.com">Home&nbsp;<i class="fas fa-home"></i></a>
        </li>
        <li class="nav-item">
        <a class="nav-link text-white text-uppercase" href="www.google.com">Reviews</a>
        </li>
        <li class="nav-item">
          <a class="nav-link text-white text-uppercase" href="www.google.com">Top Ten</a>
        </li>
      </ul>
    </div>
</nav>
)
}
export default Header;