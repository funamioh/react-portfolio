import React from "react";
import BasicCert from "./basic-cert.png";
import FrontEndCert from "./frontend-cert.png";
import Responsive from "./responsive-cert.png";
import ReactCert from "./react-cert.png";
import "./About.css";

export default function About() {
  return (
    <div className="About">
      <div className="container" id="about">
        <h2>My Bio 👑</h2>
        <p>
          Miho works as an overseas sales representative for a
          semiconductor-related company. When she was considering using websites
          and the Internet as part of sales activities, she decided to learn how
          to code. How coding can have good impacts on people's lives and the
          fact we can give shape to our ideas by codinbg has been fascinating
          for her and she decided to become a developer. <br />
          She learned front-end technologies, including Reactjs, at a SheCodes
          workshop. She also learning backend technologies and aim to become a
          full-stack developer in the near future.
        </p>

        <h3 className="shecodes-certs">SheCodes Certificates</h3>
        <div className="container certificates mb-5">
          <div className="row">
            <div className="col-md-3">
              <a
                href="https://www.shecodes.io/certificates/9fba56a89bd7aa79887a72eed8bdaef2"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src={BasicCert}
                  className="img-fluid cert"
                  alt="basic-cert"
                />
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
                  className="img-fluid cert"
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
                <img
                  src={Responsive}
                  className="img-fluid cert"
                  alt="responsive-sert"
                />
              </a>
            </div>
            <div className="col-md-3 img-fluid">
              <a
                href="https://www.shecodes.io/certificates/fa1f41192fbc23a10bf3720c2c266d65"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src={ReactCert}
                  className="img-fluid cert"
                  alt="react-sert"
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
