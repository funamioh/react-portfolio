import React from "react";
import BasicCert from "./basic-cert.png";
import FrontEndCert from "./frontend-cert.png";
import Responsive from "./responsive-cert.png";
import ReactCert from "./react-cert.png";
import "./About.css";

export default function About() {
  return (
    <div className="About">
      <div className="container">
        <h2>About</h2>
        <p>
          I work as an overseas sales representative in the electronics field,
          and my interest in using websites as part of the sales promotion
          activities led me to start learning programming.
          <br />
          <br />I started learning at the SheCodes bootcamp during the pandemic,
          where I learned HTML, CSS, Javascript, Bootstrap and API technologies
          and how to create responsive websites.
        </p>
      </div>
      <h3 className="shecodes-certs">SheCodes Certificates</h3>
      <div className="container certificates mb-5">
        <div className="row">
          <div className="col-md-3">
            <a
              href="https://www.shecodes.io/certificates/9fba56a89bd7aa79887a72eed8bdaef2"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={BasicCert} className="img-fluid" alt="basic-cert" />
            </a>
          </div>
          <div className="col-md-3">
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
          <div className="col-md-3">
            <a
              href="https://www.shecodes.io/certificates/779e11cb335c80e9be2590b79d2670e5"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={Responsive} className="img-fluid" />
            </a>
          </div>
          <div className="col-md-3 img-fluid">
            <a
              href="https://www.shecodes.io/certificates/fa1f41192fbc23a10bf3720c2c266d65"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={ReactCert} className="img-fluid" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
