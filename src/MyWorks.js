import React, { useEffect } from "react";
import "./css/MyWorks.css";
import WeatherImg from "./img/weather-img.png";
import DictionaryImg from "./img/dictionary-img.png";
import QuoteImg from "./img/quote-img.png";
import AOS from "aos";
import "aos/dist/aos.css";

export default function MyWorks() {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);

  return (
    <div className="MyWorks">
      <div className="container" id="myWork">
        <h2>My Works</h2>
        <div className="row mb-6 ">
          <div
            className="col-sm-6 launch-app"
            data-aos="fade-right"
            data-aos-duration="3000"
          >
            <img
              src={WeatherImg}
              className="img-fluid mb-4"
              alt="weather-img"
            />
          </div>
          <div
            className="col-sm-6 mb-5"
            data-aos="fade-right"
            data-aos-duration="3000"
          >
            <h3>React Weather Project</h3>
            <h4>Built with:</h4>
            <p>
              Weather app built with React. React Skeleton and
              use-places-autocomplete have been implemented aiming to improve
              user's experience.
            </p>
            <a
              href="https://trusting-franklin-037844.netlify.app"
              target="_blank"
              rel="noopener noreferrer"
            >
              Live Demo
            </a>
            <a
              href="https://github.com/funamioh/weather-react-app"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub Repo
            </a>
          </div>
        </div>
        <div className="row mb-6 ">
          <div
            className="col-sm-6 launch-app"
            data-aos="fade-left"
            data-aos-duration="3000"
          >
            <img
              src={DictionaryImg}
              className="img-fluid mb-4"
              alt="dictionary-img"
            />
          </div>
          <div
            className="col-sm-6 mb-5"
            data-aos="fade-left"
            data-aos-duration="3000"
          >
            <h3>React Dictionary Project</h3>
            <h4>Built with:</h4>
            <p>
              Dictionary app built with React. By using the dictionary API and
              the Pexels API, I have made it possible to display not only word
              definitions, but also images for the word.
            </p>
            <a
              href="https://serene-goldwasser-29304a.netlify.app"
              target="_blank"
              rel="noopener noreferrer"
            >
              Live Demo
            </a>
            <a
              href="https://github.com/funamioh/dictionary-app"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub Repo
            </a>
          </div>
        </div>
        <div className="row mb-6">
          <div
            className="col-sm-6 launch-app"
            data-aos="fade-right"
            data-aos-duration="3000"
          >
            <img src={QuoteImg} className="img-fluid mb-4" alt="quote-img" />
          </div>
          <div
            className="col-sm-6"
            data-aos="fade-right"
            data-aos-duration="3000"
          >
            <h3>Random Quote Project</h3>
            <h4>Built with:</h4>
            <p>
              Random Quote App built with HTML, CSS, and Javascript.Twitter
              button leads to twitter post with a displayed quote and author
              name, which makes it so easy to share.
            </p>
            <a
              href="https://flamboyant-ptolemy-5e6dba.netlify.app"
              target="_blank"
              rel="noopener noreferrer"
            >
              Live Demo
            </a>
            <a
              href="https://github.com/funamioh/quote-app"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub Repo
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
