import React from "react";
import "./MyWorks.css";
import WeatherImg from "./weather-img.png";
import DictionaryImg from "./dictionary-img.png";
import QuoteImg from "./quote-img.png";

export default function MyWorks() {
  return (
    <div className="MyWorks">
      <div className="container">
        <h2>My Works</h2>
        <div className="row">
          <div className="col-sm-6 mb-6 launch-app">
            <a
              href="https://trusting-franklin-037844.netlify/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={WeatherImg} className="img-fluid" />
            </a>
          </div>
          <div className="col-sm-6">
            <h2>React Weather Project</h2>
            <p>Built with:</p>
            <p></p>
          </div>
          <div className="col-sm-6 mb-4">
            <h2>React Dictionary Project</h2>
            <p>Built with:</p>
            <p></p>
          </div>
          <div className="col-sm-6 mb-4 launch-app">
            <a
              href="https://serene-goldwasser-29304a.netlify.app"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={DictionaryImg} className="img-fluid" />
            </a>
          </div>
          <div className="col-sm-6 mb-4 launch-app">
            <a
              href="https://flamboyant-ptolemy-5e6dba.netlify.app"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={QuoteImg} className="img-fluid" />
            </a>
          </div>
          <div className="col-sm-6">
            <h2>Random Quote Project</h2>
            <p>Built with:</p>
            <p></p>
          </div>
        </div>
      </div>
    </div>
  );
}
