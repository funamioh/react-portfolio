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
        <h3 class="shecodes-certs">SheCodes Certificates</h3>
        <div className="container certificates">
          <div className="row">
            <div className="col-sm-3">
              <a href="https://www.shecodes.io/certificates/9fba56a89bd7aa79887a72eed8bdaef2">
                <img src={BasicCert} className="img-fluid" />
              </a>
            </div>
            <div className="col-sm-3">
              <a href="https://www.shecodes.io/certificates/4f9e62b8ec5ddf69f7d94865f315eba1">
                <img src={FrontEndCert} className="img-fluid" />
              </a>
            </div>
            <div className="col-sm-3">
              <a href="https://www.shecodes.io/certificates/779e11cb335c80e9be2590b79d2670e5">
                <img src={Responsive} className="img-fluid" />
              </a>
            </div>
            <div className="col-sm-3 img-fluid">
              <a href="https://www.shecodes.io/certificates/fa1f41192fbc23a10bf3720c2c266d65">
                <img src={ReactCert} className="img-fluid" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
