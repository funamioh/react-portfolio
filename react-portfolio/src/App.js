import "./App.css";
import { Navbar } from "react-bootstrap";

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
      <div>
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
    </div>
  );
}

export default App;
