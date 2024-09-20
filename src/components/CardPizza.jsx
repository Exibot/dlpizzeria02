import ListGroup from "react-bootstrap/ListGroup";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faEye,
    faPizzaSlice,
    faCartShopping,
} from "@fortawesome/free-solid-svg-icons";

const formatNumber = (number) => {
    return new Intl.NumberFormat("es-CL", {
        currency: "CLP",
        style: "currency",
    }).format(number);
};

const CardPizza = ({ name, price, ingredients, img }) => {
    const ingredientsString = ingredients.join(", ");

    return (
        <Card style={{ width: "18rem" }}>
            <Card.Img variant="top" src={img} />
            <Card.Body>
                <Card.Title>Pizza {name}</Card.Title>
            </Card.Body>
            <ListGroup variant="list-group-flush">
                <ListGroup.Item>
                    <p>
                        <h5>Ingredientes: </h5>
                        <FontAwesomeIcon icon={faPizzaSlice} />{" "}
                        {ingredientsString}.
                    </p>
                </ListGroup.Item>
                <ListGroup.Item>
                    <h4>Precio: {formatNumber(price)}</h4>
                    <div className="d-flex justify-content-between">
                        <Button variant="outline-dark" size="sm">
                            Ver Más <FontAwesomeIcon icon={faEye} />
                        </Button>
                        <Button variant="dark" size="sm">
                            Añadir <FontAwesomeIcon icon={faCartShopping} />
                        </Button>
                    </div>
                </ListGroup.Item>
            </ListGroup>
        </Card>
    );
};
export default CardPizza;
