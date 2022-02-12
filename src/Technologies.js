import React from "react";
import "./css/Technologies.css";
import ResponsiveDesign from "./img/responsive-design-symbol.png";

export default function Technologies() {
  return (
    <div className="Technologies">
      <h2>My Skills & Tools</h2>
      <div className="container">
        <div className="row">
          <div className="icon-box">
            <i className="devicon devicon-html5-plain"></i>
            <p>HTML5</p>
          </div>
          <div className="icon-box">
            <i className="devicon devicon-css3-plain"></i>
            <p>CSS3</p>
          </div>
          <div className="icon-box">
            <i className="fab fa-js"></i>
            <p>JavaScript</p>
          </div>
          <div className="icon-box">
            <i className="devicon devicon-react-original"></i>
            <p>React</p>
          </div>
        </div>
        <div className="icon-box">
          <i className="fas fa-cogs"></i>
          <p>Restful APIs</p>
        </div>
        <div className="icon-box">
          <i className="devicon devicon-bootstrap-plain"></i>
          <p>Bootstrap</p>
        </div>
        <div className="icon-box">
          <i className="devicon devicon-figma-plain"></i>
          <p>Figma</p>
        </div>
        <div className="icon-box">
          <i className="devicon devicon-visualstudio-plain"></i>
          <p>VS Code</p>
        </div>
        <div className="icon-box">
          <i className="devicon devicon-github-plain"></i>
          <p>GitHub</p>
          <img
            src={ResponsiveDesign}
            alt="responsive design"
            width="20px"
            display="inline"
          />
          <p>Responsive Websites</p>
        </div>
      </div>
    </div>
  );
}
