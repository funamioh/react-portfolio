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
          <div className="col-lg-4 mb-4">
            <a
              href="https://trusting-franklin-037844.netlify.app/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={WeatherImg} className="img-fluid" />
            </a>
            <h2>React Weather Project</h2>
          </div>
          <div className="col-lg-4 mb-4">
            <a
              href="https://serene-goldwasser-29304a.netlify.app/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={DictionaryImg} className="img-fluid" />
            </a>
            <h2>React Dictionary Project</h2>
          </div>
          <div className="col-lg-4 mb-4">
            <a
              href="https://flamboyant-ptolemy-5e6dba.netlify.app"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={QuoteImg} className="img-fluid" />
            </a>
            <h2>Random Quote Project</h2>
          </div>
        </div>
      </div>
    </div>
  );
}
