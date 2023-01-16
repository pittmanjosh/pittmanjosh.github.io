import React from "react";
import logo from "./logo.svg";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import {
  Container,
  Dropdown,
  Nav,
  NavDropdown,
  NavItem,
  NavLink,
  Navbar,
} from "react-bootstrap";

function App() {
  return (
    <div className="App">
      <Navbar bg="dark" variant="dark">
        <Container fluid>
          <Nav>
            <Navbar.Brand href="/">Josh Pittman</Navbar.Brand>
            <Nav.Link href="https://pittmanjosh.github.io/cicdpoker">
              Poker
            </Nav.Link>
            <NavLink href="https://bankify-josh.herokuapp.com/">
              Bankify
            </NavLink>
            <NavDropdown title="Projects">
              <NavDropdown.Item href="https://pittmanjosh.github.io/cicdpoker">
                Poker
              </NavDropdown.Item>
              <NavDropdown.Item href="https://bankify-josh.herokuapp.com/">
                Bankify
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Container>
      </Navbar>
    </div>
  );
}

export default App;
