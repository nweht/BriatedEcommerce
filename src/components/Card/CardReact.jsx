import React from 'react';
import { Container } from 'react-bootstrap';
import {Button, Card} from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './CardReact.css'

function CardReact(props) {
    return (
        <Container className="cardReact">
      <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src ={props.img} />
      <Card.Body>
        <Card.Title>{props.title}</Card.Title>
        <Card.Text>{props.detail}</Card.Text>
        <Card.Footer>
        <Card.Text>${props.price}</Card.Text>
        <Card.Text>Stock: {props.stock}</Card.Text>
        <Link to={`/games/${props.id}`}>
        <Button variant="primary">Comprar</Button></Link>
        </Card.Footer>
      </Card.Body>
    </Card>
        </Container>
    );
  }
  
  export default CardReact;
