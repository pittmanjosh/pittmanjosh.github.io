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
import dotenv from "dotenv";
dotenv.config();

function App() {
  const pokerUrl = process.env.REACT_APP_POKER_URL || "/cicdpoker";

  return (
    <div className="App">
      <Navbar bg="dark" variant="dark">
        <Container fluid>
          <Nav>
            <Navbar.Brand href="/">Josh Pittman</Navbar.Brand>
            <Nav.Link href="https://linkedin.com/in/joshpittmancode/">
              LinkedIn
            </Nav.Link>
            <NavLink href="https://github.com/pittmanjosh">GitHub</NavLink>
            <NavDropdown title="Projects">
              <NavDropdown.Item href={pokerUrl}>Poker</NavDropdown.Item>
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
