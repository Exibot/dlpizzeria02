import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Button from "react-bootstrap/Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faLock,
    faPizzaSlice,
    faUnlock,
} from "@fortawesome/free-solid-svg-icons";

const formatNumber = (number) => {
    return new Intl.NumberFormat("es-CL", {
        currency: "CLP",
        style: "currency",
    }).format(number);
};

function NavigationBar() {
    const total = 25000;
    let token = false;
    return (
        <Navbar bg="dark" variant="dark">
            <Container>
                <Navbar.Brand href="#home">Pizzería Mamma Mía!</Navbar.Brand>

                <Nav className="me-auto">
                    <Nav.Link href="#home">
                        <Button variant="outline-light">
                            <FontAwesomeIcon icon={faPizzaSlice} /> Home
                        </Button>
                    </Nav.Link>
                    {token ? (
                        <>
                            <Nav.Link href="#profile">
                                <Button variant="outline-light">
                                    <FontAwesomeIcon icon={faUnlock} /> Profile
                                </Button>
                            </Nav.Link>
                            <Nav.Link href="#logout">
                                <Button variant="outline-light">
                                    <FontAwesomeIcon icon={faLock} /> Logout
                                </Button>
                            </Nav.Link>
                        </>
                    ) : (
                        <>
                            <Nav.Link href="#login">
                                <Button variant="outline-light">
                                    <FontAwesomeIcon icon={faLock} /> Login
                                </Button>
                            </Nav.Link>
                            <Nav.Link href="#register">
                                <Button variant="outline-light">
                                    <FontAwesomeIcon icon={faLock} /> Register
                                </Button>
                            </Nav.Link>
                        </>
                    )}
                </Nav>
                <Nav href="#cart" className="ms-auto">
                    <Button variant="outline-info">
                        {formatNumber(total)}
                    </Button>
                </Nav>
            </Container>
        </Navbar>
    );
}

export default NavigationBar;
