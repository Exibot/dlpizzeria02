import ListGroup from "react-bootstrap/ListGroup";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

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
                    <h5>Ingredientes:</h5> <p>{ingredientsString}</p>
                </ListGroup.Item>
                <ListGroup.Item>
                    <h4>Precio: ${price}</h4>
                    <div className="d-flex justify-content-between">
                        <Button variant="outline-dark" size="sm">
                            Ver Más
                        </Button>
                        <Button variant="dark" size="sm">
                            Añadir
                        </Button>
                    </div>
                </ListGroup.Item>
            </ListGroup>
        </Card>
    );
};
export default CardPizza;
