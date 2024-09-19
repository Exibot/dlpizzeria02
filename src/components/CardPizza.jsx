import ListGroup from "react-bootstrap/ListGroup";
import Card from "react-bootstrap/Card";



const CardPizza = ({ name, price, ingredients, img }) => {
    const ingredientsString = ingredients.join(", ");

  // TODO: Add functionality to handle price formatting and add a button to add the pizza to the cart.
  return (
    <Card style={{ width: "18rem" }}>
      <Card.Img variant="top" src={img} />
      <Card.Body>
        <Card.Title>Pizza {name}</Card.Title>
        <ListGroup variant="list-group-flush">
          <ListGroup.Item>Ingredientes: <p>{ingredientsString}</p></ListGroup.Item>
          <ListGroup.Item>Precio: ${price}</ListGroup.Item>
        </ListGroup>
      </Card.Body>
    </Card>
  );
};
export default CardPizza;
