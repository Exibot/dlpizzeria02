import { useState } from "react";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!email.trim() || !password.trim()) {
            alert("Todos los campos son obligatorios");
            return;
        } else {
            alert("Bienvenido!");
        }
    };

    return (
        <>
            <Container>
                <Col>
                    <Row>
                        <Form>
                            <Form.Group as={Row} controlId="loginEmail">
                                <Form.Label column sm={2}>
                                    Email
                                </Form.Label>
                                <Form.Control
                                    type="email"
                                    placeholder="Ingrese su email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                />
                            </Form.Group>
                            <Form.Group as={Row} controlId="loginPassword">
                                <Form.Label column sm={2}>
                                    Password
                                </Form.Label>
                                <Form.Control
                                    type="password"
                                    placeholder="*******"
                                    value={password}
                                    onChange={(e) =>
                                        setPassword(e.target.value)
                                    }
                                />
                            </Form.Group>
                            <Button
                                variant="primary"
                                type="submit"
                                onClick={handleSubmit}
                            >
                                Ingresar
                            </Button>
                        </Form>
                    </Row>
                </Col>
            </Container>
        </>
    );
}

export default Login;
