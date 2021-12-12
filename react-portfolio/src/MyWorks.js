import React from "react";
import WeatherImg from "./weather-img.png";
import DictionaryImg from "./dictionary-img.png";
import QuoteImg from "./quote-img.png";

export default function MyWorks() {
  return (
    <div className="My Works">
      <div className="container">
        <h2>My Works</h2>
        <div className="row">
          <div className="col-md-4">
            <a href="https://trusting-franklin-037844.netlify.app/">
              <img src={WeatherImg} className="img-fluid" />
            </a>
          </div>
          <div className="col-md-4">
            <a href="https://serene-goldwasser-29304a.netlify.app/">
              <img src={DictionaryImg} className="img-fluid" />
            </a>
          </div>
          <div className="col-md-4">
            <a href="https://flamboyant-ptolemy-5e6dba.netlify.app">
              <img src={QuoteImg} className="img-fluid" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
