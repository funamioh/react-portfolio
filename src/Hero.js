import React from "react";
import "./css/Hero.css";
import LinkedinIcon from "./img/linkedin-in-brands.svg";
import GitHubIcon from "./img/github-brands.svg";
import ProfileImg from "./img/profile.jpg";

export default function Hero() {
  return (
    <div className="Hero" id="hero">
      <div className="head-tile">
        <h1>
          Miho
          <br />
          Funayama
        </h1>
        <p>Front-end Engineer from Japan</p>
        <a
          href="https://www.linkedin.com/in/miho-funayama-653b391b4/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={LinkedinIcon} className="icon" alt="linkedin-icon" />
        </a>
        <a
          href="https://github.com/funamioh"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={GitHubIcon} className="icon" alt="github-icon" />
        </a>
      </div>
      <div className="profile-pic">
        <img src={ProfileImg} className="profile-pic" alt="profile-pic" />
      </div>
    </div>
  );
}
