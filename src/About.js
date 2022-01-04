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
        <h2>My Bio</h2>
        <h3>My Career👑</h3>
        <p>
          I work in the field of electronics, as a sales representative mainly
          for overseas customers. I became interested in using websites as part
          of promotional activities during the Covid-19 period, and taught
          myself front-end skills while maintaining a full-time job. I am
          interested in using technology to improve people's lives in general,
          and am also learning Python aiming to automate some of my office work.
          In her sales career, I have communicated with people in different
          positions/fields, negotiating with customers, coordinating internally,
          and dealing with transporters. In addition to my sociable nature, I
          have also acquired the ability to pay attention to details through my
          work.
        </p>
        <h3>My Philosophy🌺</h3>
        <p>
          I believe that life is a series of transformations. Until the age of
          20, I could only speak Japanese, but I took a leap of faith and
          learned English. I am always eager to learn new things. Since I have a
          growth mindset myself, I want to push those who follow me to do their
          best. I can't wait for my new chance to work as a front-end engineer!
        </p>

        <h3>My Interest🎸</h3>
        <p>
          In my free time, I enjoy reading, practicing guitar, karaoke, and
          doing decorative sushi-making. Traveling is also one of my passion.
          Seeing historical architecture and relaxing in cafes to enjoy the
          local atmosphere is my favorite way.
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
