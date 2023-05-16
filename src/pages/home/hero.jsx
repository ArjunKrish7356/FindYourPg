import React from "react";
import heroimg from "../../images/hero.jpg";
import './hero.css'

export default function Hero() {
  return (
    <div className="hero">
      <div className="nav">
        <div className="nav-left">
          <h2>FindYourPg</h2>
        </div>
        <div className="nav-right">
          <a href="/login">Login</a>
        </div>
      </div>
      <div className="hero-cont">
        <div className="hero-left">
          <div className="hero-left-cont">
          <h1>Discover your dream PG today</h1>
            <a href="/login">Join Now</a>
          </div>
        </div>
        <div className="hero-right">
          <img src={heroimg} alt=""></img>
        </div>
      </div>
    </div>
  );
}