import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Button from "react-bootstrap/Button";

function NavigationBar() {
  return (
    <Navbar bg="dark" variant="dark">
      <Container>
        <Navbar.Brand href="#home">Pizzería Mamma Mía!</Navbar.Brand>

        <Nav className="me-auto">
          <Nav.Link href="#home">
            <Button variant="outline-light">Home</Button>
          </Nav.Link>
          <Nav.Link href="#login">
            <Button variant="outline-light">Login</Button>
          </Nav.Link>
          <Nav.Link href="#register">
            <Button variant="outline-light">Register</Button>
          </Nav.Link>
        </Nav>

        <Nav href="#cart" className="ms-auto">
          <Button variant="outline-info">$</Button>
        </Nav>
      </Container>
    </Navbar>
  );
}

export default NavigationBar;
