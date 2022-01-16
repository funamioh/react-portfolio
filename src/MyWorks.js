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
              href="https://trusting-franklin-037844.netlify.app"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={WeatherImg} className="img-fluid" alt="weather-img" />
            </a>
          </div>
          <div className="col-sm-6 mb-5">
            <h3>React Weather Project</h3>
            <h4>Built with:</h4>
            <p>
              Weather app built with React. React Skeleton and
              use-places-autocomplete have been implemented aiming to improve
              user's experience.
            </p>
          </div>
        </div>
        <div className="row">
          <div className="col-sm-6 mb-6 launch-app">
            <a
              href="https://serene-goldwasser-29304a.netlify.app"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src={DictionaryImg}
                className="img-fluid"
                alt="dictionary-img"
              />
            </a>
          </div>
          <div className="col-sm-6 mb-5">
            <h3>React Dictionary Project</h3>
            <h4>Built with:</h4>
            <p>
              Dictionary app built with React. By using the dictionary API and
              the Pexels API, I have made it possible to display not only word
              definitions, but also images for the word.
            </p>
          </div>
        </div>
        <div className="row">
          <div className="col-sm-6 mb-5 launch-app">
            <a
              href="https://flamboyant-ptolemy-5e6dba.netlify.app"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={QuoteImg} className="img-fluid" alt="quote-img" />
            </a>
          </div>
          <div className="col-sm-6">
            <h3>Random Quote Project</h3>
            <h4>Built with:</h4>
            <p>
              Random Quote App built with HTML, CSS, and Javascript.Twitter
              button leads to twitter post with a displayed quote and author
              name, which makes it pretty sharable.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
