import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Nav, NavDropdown, NavLink, Navbar } from "react-bootstrap";

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
              <NavDropdown.Item href={pokerUrl} target="_blank">
                Poker
              </NavDropdown.Item>
              <NavDropdown.Item
                href="https://bankify-josh.herokuapp.com/"
                target="_blank"
              >
                Bankify
              </NavDropdown.Item>
              <NavDropdown.Item
                href="https://josh-spring-mongo.herokuapp.com/"
                target="_blank"
              >
                Basic SpringBoot App
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Container>
      </Navbar>
    </div>
  );
}

export default App;
