import "./App.css";
import { Navbar } from "react-bootstrap";
import Hero from "./Hero";
import About from "./About";
import MyWorks from "./MyWorks";
import Contact from "./Contact";

function App() {
  var Container = require("react-bootstrap").Container;
  var Navbar = require("react-bootstrap").Navbar;
  var Nav = require("react-bootstrap").Nav;
  var NavItem = require("react-bootstrap").NavItem;
  var NavDropdown = require("react-bootstrap").NavDropdown;
  var MenuItem = require("react-bootstrap").MenuItem;
  var Grid = require("react-bootstrap").Grid;
  var Row = require("react-bootstrap").Row;
  var Col = require("react-bootstrap").Col;

  return (
    <div className="App">
      <div className="container">
        <Navbar bg="light" expand="lg">
          <Container className="navbar">
            <Navbar.Brand href="#home">Miho Funayama</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto">
                <Nav.Link href="#home">Home</Nav.Link>
                <Nav.Link href="#link">My Work</Nav.Link>
                <Nav.Link href="#link">About</Nav.Link>
                <Nav.Link href="#link">Contact</Nav.Link>
                <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                  <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.2">
                    Another action
                  </NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.3">
                    Something
                  </NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item href="#action/3.4">
                    Separated link
                  </NavDropdown.Item>
                </NavDropdown>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </div>
      <Hero />
      <MyWorks />
      <About />
      <Contact />

      <footer>
        This project is coded by Miho Funayama and{" "}
        <a
          href="https://github.com/funamioh/weather-react-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          open-sourced on GitHub
        </a>
        . Also hosted on{" "}
        <a
          href="https://trusting-franklin-037844.netlify.app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Netlify
        </a>
      </footer>
    </div>
  );
}

export default App;
