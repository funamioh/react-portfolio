import "./css/App.css";
import Hero from "./Hero";
import About from "./About";
import Technologies from "./Technologies";
import MyWorks from "./MyWorks";
import Contact from "./Contact";

function App() {
  var Container = require("react-bootstrap").Container;
  var Navbar = require("react-bootstrap").Navbar;
  var Nav = require("react-bootstrap").Nav;

  return (
    <div className="App" id="app">
      <div className="container-fluid">
        <Navbar expand="lg">
          <Container className="navbar">
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto">
                <Nav.Link className="link" href="#hero">
                  Home
                </Nav.Link>
                <Nav.Link className="link" href="#myWork">
                  My Work
                </Nav.Link>
                <Nav.Link className="link" href="#about">
                  About
                </Nav.Link>
                <Nav.Link className="link" href="#contact">
                  Contact
                </Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </div>
      <Hero />
      <MyWorks />
      <About />
      <Technologies />
      <Contact />

      <footer>
        This project is coded by Miho Funayama and{" "}
        <a
          href="https://github.com/funamioh/react-portfolio"
          target="_blank"
          rel="noopener noreferrer"
        >
          open-sourced on GitHub
        </a>
      </footer>
    </div>
  );
}

export default App;
