import React from "react";
import "../styles/Home.css";
import { heroData } from "../data/data.js";
import Header from "./Header.jsx";
import { Link } from "react-router-dom";
import { featuredData } from "../data/data.js";
import { marsRoverData } from "../data/data.js";
import { apodData } from "../data/data.js";

export default function Home() {
  const { title, subtitle, missionStatus } = heroData.infoHero;
  const { jezero, goals, rocks } = featuredData.images;

  return (
    <div>
      <Header />
      {/* HERO SECTION */}
      <section>
        <div className="hero-overlay">
          <h1 className="home-title">{title.toUpperCase()}</h1>
        </div>
        <div className="hero-content">
          <div className="mission-info">
            <h2 className="home-title-subtitle">{subtitle.toUpperCase()}</h2>
            <div className="mission-numbers">
              <div className="mission-stat">
                <p className="stat-number">{missionStatus.rovers}</p>
                <p className="stat-description">
                  {missionStatus.rovers_description}
                </p>
              </div>
              <div className="mission-stat">
                <p className="stat-number">{missionStatus.spacecrafts}</p>
                <p className="stat-description">
                  {missionStatus.spacecrafts_description}
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="hero-background"></div>
      </section>
      <div className="section-divider"></div>

      {/* FEATURED TOPICS SECTION */}

      <section className="featured-topics">
        <div className="featured-topics-div">
          <div className="featured-topics-container">
            <h2 className="featured-title">
              {featuredData.title.toUpperCase()}
            </h2>
            <ul className="featured-unordered">
              <li>
                <span
                  className="span-icon"
                  style={{ backgroundImage: `url(${jezero})` }}
                ></span>
                <strong>{featuredData.jezero}</strong>
              </li>
              <li>
                <span
                  className="span-icon"
                  style={{ backgroundImage: `url(${goals})` }}
                ></span>
                <strong>{featuredData.goals}</strong>
              </li>
              <li>
                <span
                  className="span-icon"
                  style={{
                    backgroundImage: `url(${rocks})`,
                    width: "150px",
                    height: "150px",
                  }}
                ></span>
                <strong>{featuredData.rock_samples}</strong>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* EXPLORE MARS ROVERS SECTION */}

      <section className="explore-section">
        <div className="explore-content">
          <h2 className="explore-title">{marsRoverData.title}</h2>
          <p className="explore-description">{marsRoverData.description}</p>
          <Link className="explore-button" to="/rovers">
            {marsRoverData.button}
          </Link>
        </div>
      </section>

      {/* WHY DO WE GO SECTION */}

      <section className="wdwg-section">
        <div className="wdwg-content">
          <h2 className="wdwg-title">Why do we go?</h2>
          <p className="wdwg-description">
            Mars is one of the most explored bodies in our solar system, and
            it's the only planet where we've sent rovers to explore the alien
            landscape. NASA missions have found lots of evidence that Mars was
            much wetter and warmer, with a thicker atmosphere, billions of years
            ago.
          </p>
          <Link className="explore-button" to="/rovers">
            {marsRoverData.button}
          </Link>
        </div>
        <div style={{ height: "40vh", maxWidth:'459px', marginRight:'100px' }}>
          <img
            style={{ height: "80%" }}
            src="https://science.nasa.gov/wp-content/uploads/2024/03/pia02570orig.webp?w=1536"
            alt="earth-mars-comparison"
          />
          <p style={{fontSize:'0.7rem', textAlign:'start', color:'#404040'
            }}>
            Earth-Mars Comparison: This composite image, from NASA Galileo and
            Mars Global Survey orbiters, of Earth and Mars was created to allow
            viewers to gain a better understanding of the relative sizes of the
            two planets. JPL
          </p>
        </div>
      </section>

      {/* NASA APOD section */}

      <section
        className="apod-section"
        style={{
          backgroundImage: `url('https://www.nasa.gov/wp-content/themes/nasa/assets/images/404-bg.jpg')`,
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
      >
        <div className="apod-content">
          <h2 className="apod-title">{apodData.title}</h2>
          <p className="apod-description">{apodData.description}</p>
          <Link className="explore-button" to="/apod">
            {apodData.button}
          </Link>
        </div>
      </section>

      <footer>
        <div className="footer-section"></div>
      </footer>
    </div>
  );
}
