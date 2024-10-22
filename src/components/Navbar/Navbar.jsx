import React from "react";
import logoImg from "../../assets/images/Image1.png";

import "./styles.css";

export function Navbar() {
  return (
    <header>
      <nav id="navbar">
        <div className="nav-brand">
          <img src={logoImg} alt="" width="80px" />
          <h1>Space Flight</h1>
        </div>

        <ul className="nav-list">
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#">Trending</a>
          </li>
          <li>
            <a href="#">Categories</a>
          </li>
          <li>
            <a href="#">About Us</a>
          </li>
        </ul>
      </nav>
    </header>
  );
}

// export default Navbar; // Padrão de importação
