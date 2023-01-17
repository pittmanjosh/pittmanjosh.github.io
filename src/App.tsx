import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import {
  Card,
  Container,
  Nav,
  NavDropdown,
  NavLink,
  Navbar,
} from "react-bootstrap";

function App() {
  const pokerUrl = process.env.REACT_APP_POKER_URL || "/cicdpoker";

  return (
    <div className="App">
      <Navbar bg="dark" variant="dark" expand="sm">
        <Container fluid>
          <Navbar.Brand href="/">Josh Pittman</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse
            id="basic-navbar-nav"
            className="justify-content-end"
          >
            <Nav>
              <Nav.Link href="/JoshPittmanResume.pdf" target="_blank">
                Resume
              </Nav.Link>
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
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <p className="text-start m-2">
        Josh Pittman is a fullstack software engineer eagerly seeking employment
        in a new role. Having successfully transitioned careers from cruise ship
        musician to software engineer, Josh has demonstrated his ability to
        learn and thrive in any context. Working as an engineer within a
        healthcare startup onboarding team taught Josh how to respond to user
        insights to achieve strategic business objectives in a fast-paced,
        collaborative, remote environment.
      </p>
    </div>
  );
}

export default App;
