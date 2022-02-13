import React from "react";
import BasicCert from "./img/basic-cert.png";
import FrontEndCert from "./img/frontend-cert.png";
import Responsive from "./img/responsive-cert.png";
import ReactCert from "./img/react-cert.png";
import "./css/About.css";

export default function About() {
  return (
    <div className="About">
      <div className="container" id="about">
        <h2>My Bio 👑</h2>
        <p>
          I'm a former sales representative who turned software developer. My
          passion is to create convenient user interfaces using good tools and
          designs.
        </p>
        <p>
          I learned frontend development skills on SheCodes online workshops and
          am constantly working on improving understanding and skills of
          JavaScript and React through building websites and applications.
        </p>

        <h3 className="shecodes-certs">SheCodes Certificates</h3>
        <div className="container certificates mb-5">
          <div className="row first-row">
            <div className="col-md-4">
              <div className="flip-card">
                <div className="flip-card-inner">
                  <div className="flip-card-front">
                    <a
                      href="https://www.shecodes.io/certificates/9fba56a89bd7aa79887a72eed8bdaef2"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <img
                        src={BasicCert}
                        className="img-fluid"
                        alt="basic-cert"
                      />
                    </a>
                  </div>
                  <div className="flip-card-back"></div>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <a
                href="https://www.shecodes.io/certificates/4f9e62b8ec5ddf69f7d94865f315eba1"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src={FrontEndCert}
                  className="img-fluid"
                  alt="frontend-cert"
                />
              </a>
            </div>
          </div>
          <div className="row second-row">
            <div className="col-md-4">
              <a
                href="https://www.shecodes.io/certificates/779e11cb335c80e9be2590b79d2670e5"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src={Responsive}
                  className="img-fluid"
                  alt="responsive-sert"
                />
              </a>
            </div>
            <div className="col-md-4 img-fluid">
              <a
                href="https://www.shecodes.io/certificates/fa1f41192fbc23a10bf3720c2c266d65"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={ReactCert} className="img-fluid" alt="react-sert" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
