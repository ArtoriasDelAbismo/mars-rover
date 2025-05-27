import React from "react";
import { Link } from "react-router-dom";
import '../styles/Header.css';

export default function Header() {
  return (
    <>
      {/* HEADER */}
      <header className="header">
        <div className="header-left">
          <h2>Explore</h2>
          <div className="search-bar">
            <input type="text" className="search-input" />
            <button className="search-button">
              <i className="fa-solid fa-magnifying-glass"></i>
            </button>
          </div>
        </div>
        <div>
          <img className="logo" src="/src/assets/logo.png" alt="Logo" />
        </div>
      </header>

      {/* NAVBAR */}
      <nav>
        <ul className="navbar">
          <li>
            <Link className="nav-link" to="/">
              Home
            </Link>
          </li>
          <li>
            <Link className="nav-link" to="/rovers">
              Mars Rovers
            </Link>
          </li>
          <li>
            <Link className="nav-link" to="/map">
              Mars Map
            </Link>
          </li>
          <li>
            <Link className="nav-link" to="/weather">
              Mars Weather
            </Link>
          </li>
          <li>
            <Link className="nav-link" to="/apod">
              Nasa APOD
            </Link>
          </li>
        </ul>
      </nav>
    </>
  );
}
