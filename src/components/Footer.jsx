import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

function Footer() {
    return (
        <Container fluid className="bg-dark text-light p-4 mt-5">
            <Row >
                <Col>
                    <p className="text-center"> &copy; 2022 - Pizzería Mamma Mía! - Todos los derechos reservados</p>
                </Col>
            </Row>
        </Container>
    );
}

export default Footer;
