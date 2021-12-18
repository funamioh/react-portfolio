import React from "react";
import "./Hero.css";
import LinkedinIcon from "./linkedin-in-brands.svg";
import GitHubIcon from "./github-brands.svg";
import ProfileImg from "./profile.jpg";

export default function Hero() {
  return (
    <div className="Hero">
      <div className="row">
        <div className="col-12 col-lg-7 align-middle">
          <h1>Miho Funayama</h1>
          <p>Front-end Engineer, based in Japan</p>
          <a
            href="https://www.linkedin.com/in/miho-funayama-653b391b4/"
            target="_blank"
            rel="noopener noreferer"
          >
            <img src={LinkedinIcon} className="icon" />
          </a>
          <a
            href="https://github.com/funamioh"
            target="_blank"
            rel="noopener noreferer"
          >
            <img src={GitHubIcon} className="icon" />
          </a>
        </div>
        <div className="col-lg-5">
          <img src={ProfileImg} className="profile-pic" alt="profile-pic" />
        </div>
      </div>
    </div>
  );
}
