import { useState } from "react";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

function Register() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!email.trim() || !password.trim()) {
            alert("Porfavor rellene todos los campos");
        } else if (password !== confirmPassword) {
            alert("Las contraseñas no coinciden");
        } else {
            // Registrar al usuario en la base de datos
            console.log("Usuario registrado correctamente");
        }
    };

    return (
        <>
            <Container className="mt-4">
                <Form>
                    <Row>
                        <Col>
                            <Form.Group
                                className="mb-3"
                                controlId="registerFormEmail"
                            >
                                <Form.Label>Correo electrónico</Form.Label>
                                <Form.Control
                                    type="email"
                                    placeholder="Introduce tu correo electrónico"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                />
                            </Form.Group>
                            <Form.Group
                                className="mb-3"
                                controlId="registerFormPassword"
                            >
                                <Form.Label>Contraseña</Form.Label>
                                <Form.Control
                                    type="password"
                                    placeholder="Introduce tu contraseña"
                                    value={password}
                                    onChange={(e) =>
                                        setPassword(e.target.value)
                                    }
                                />
                            </Form.Group>
                            <Form.Group
                                className="mb-3"
                                controlId="registerFormConfirmPassword"
                            >
                                <Form.Label>Confirmar contraseña</Form.Label>
                                <Form.Control
                                    type="password"
                                    placeholder="Confirma tu contraseña"
                                    value={confirmPassword}
                                    onChange={(e) =>
                                        setConfirmPassword(e.target.value)
                                    }
                                />
                            </Form.Group>
                            <Button
                                className="mt-2"
                                variant="primary"
                                type="submit"
                                onClick={handleSubmit}
                            >
                                Registrar
                            </Button>
                        </Col>
                    </Row>
                </Form>
            </Container>
        </>
    );
}

export default Register;
