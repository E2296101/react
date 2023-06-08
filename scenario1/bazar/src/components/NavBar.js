import React from "react";
import { Link, useLocation } from "react-router-dom";

const NavBar = () => {
  const location = useLocation();

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark  px-3">
      <Link to="/" className="navbar-brand">Le Bazar</Link>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav ml-auto">
          <li className={`nav-item ${location.pathname === "/" ? "active" : ""}`}>
            <Link to="/" className="nav-link">Accueil</Link>
          </li>
          <li className={`nav-item ${location.pathname === "/produits" ? "active" : ""}`}>
            <Link to="/produits" className="nav-link">Produits</Link>
          </li>
          <li className={`nav-item ${location.pathname === "/panier" ? "active" : ""}`}>
            <Link to="/panier" className="nav-link">Panier</Link>
          </li>
          <li className={`nav-item ${location.pathname === "/contact" ? "active" : ""}`}>
            <Link to="/contact" className="nav-link">Contact</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;
